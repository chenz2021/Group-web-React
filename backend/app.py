import imp
import os
from unittest.mock import NonCallableMagicMock
import dateutil.parser
import babel
from flask import Flask, render_template, request, Response, flash, redirect, url_for, abort, jsonify
from flask_moment import Moment
import logging
from logging import Formatter, FileHandler
import sys
from models import db_setup, People, Publication, Opportunity
import json
from flask_cors import CORS
from auth import AuthError, requires_auth

app = Flask(__name__)
moment = Moment(app)
db = db_setup(app)
CORS(app)


def format_datetime(value, format='medium'):
    date = dateutil.parser.parse(value)
    if format == 'full':
        format = "EEEE MMMM, d, y 'at' h:mma"
    elif format == 'medium':
        format = "EE MM, dd, y h:mma"
    return babel.dates.format_datetime(date, format, locale='en')

app.jinja_env.filters['datetime'] = format_datetime

Publication_per_page = 10

# paginate publications helper function
def paginate_publication(request, selection):
    page = request.args.get("page", 1, type=int)
    start = (page - 1) * Publication_per_page
    end = start + Publication_per_page
    publications = [publication.format() for publication in selection]
    current_publications = publications[start:end]
    return current_publications

@app.route('/')
def index():
    return 'Hello'

@app.route('/token', methods=['POST'])
def create_token():
    email = request.json.get('email', None)
    password = request.json.get('password', None)
    

@app.route('/opportunities', methods = ['GET'])
def get_position():
    openings = Opportunity.query.order_by(Opportunity.id).all()
    data = []
    for opening in openings:
        temp_data = {
            'id': opening.id,
            'title': opening.title,
            'description': opening.description,
            'posted_at': opening.posted_at
        }
        data.append(temp_data)
    return jsonify({
        'success': True,
        'Opportunity': data
    })

@app.route('/admin/opportunities', methods = ['GET'])
@requires_auth('post:opportunities')
def get_position_admin(jwt):
    openings = Opportunity.query.order_by(Opportunity.id).all()
    data = []
    for opening in openings:
        temp_data = {
            'id': opening.id,
            'title': opening.title,
            'description': opening.description,
            'posted_at': opening.posted_at
        }
        data.append(temp_data)
    return jsonify({
        'success': True,
        'Opportunity': data
    })

@app.route('/opportunities', methods = ['POST'])
@requires_auth('post:opportunities')
def create_position(jwt):
    body = request.get_json()
    title = body.get('title', None)
    description = body.get('description', None)
    posted_at = body.get('posted_at', None)
    if title is None or description is None:
        return 'Invalid input! Must provide title and description'
    try:
        opportunity = Opportunity(title=title, posted_at=posted_at, \
            description=description)
        opportunity.insert()
        return jsonify({
            'success': True,
            'added': opportunity.id
        })
    except Exception:
        abort(400)

@app.route('/opportunities/<id>', methods = ['DELETE'])
@requires_auth('delete:opportunities')
def delete_position(jwt, id):
    opening = Opportunity.query.\
        filter(Opportunity.id == id).one_or_none()
    if opening is None:
        abort(404)
    try:
        opening.delete()
        return jsonify({
            'success': True,
            'deleted': opening.id
        }, 200)
    except Exception:
        abort(422)

@app.route('/opportunities/search', methods=['POST'])
def search_opportunity():
    body = request.get_json()
    search_term = body.get('search_term', '')
    openings = Opportunity.query.filter\
        (Opportunity.description.ilike\
            ('%' + search_term + '%')).all()
    response = {
        'count': len(openings),
        'data': []
    }
    for opening in openings:
        response['data'].append({
            'id': opening.id,
            'title': opening.title,
            'description': opening.description
        })
    return jsonify({
        'success': True,
        'response': response
    })

@app.route('/publications', methods=['GET'])
def get_publications():
    selection = Publication.query.order_by(Publication.id).all()
    paginated_publication = paginate_publication(request, selection)
    if len(paginated_publication) == 0:
        abort(404)
    return jsonify({
        'success': True,
        'publications': paginated_publication
    })

@app.route('/admin/publications', methods=['GET'])
@requires_auth('post:publications')
def get_publications_admin(jwt):
    selection = Publication.query.order_by(Publication.id).all()
    paginated_publication = paginate_publication(request, selection)
    if len(paginated_publication) == 0:
        abort(404)
    return jsonify({
        'success': True,
        'publications': paginated_publication
    })

@app.route("/publications/<id>", methods=['DELETE'])
@requires_auth('delete:publications')
def delete_publication(jwt, id):
    try:
        publication = Publication.query.filter\
            (Publication.id == id).one_or_none()
        
        if publication is None:
            abort(404)
        publication.delete()
        selection = Publication.query.order_by\
            (Publication.id).all()
        paginated_publication = paginate_publication(request, selection)
        if len(paginated_publication) == 0:
            abort(404)
        return jsonify({
            'success': True,
            'publications': paginated_publication
        })
    except Exception as e:
        if '404' in str(e):
            abort(404)
        else:
            abort(422)
    

@app.route('/publications', methods=['POST'])
@requires_auth('post:publications')
def add_publication(jwt):
    body = request.get_json()
    title = body.get('title', '')
    year = body.get('year', '')
    publisher = body.get('publisher', '')
    author = body.get("author", '')
    link = body.get("link", '')
    cover = body.get("cover", '')

    try:
        publication = Publication(title=title,year=year, \
            publisher=publisher, author=author, link=link, cover=cover)
        publication.insert()
        return jsonify({
            "success": True,
            "created": publication.id
        })
    except Exception:
        abort(422)

@app.route('/publications/search', methods=['POST'])
def search_publication():
    body = request.get_json()
    search = body.get('searchTerm', None)
    try:
        selection = Publication.query.order_by(Publication.id).\
            filter(Publication.title.ilike("%{}%".format(search))).all()
        current_publications = paginate_publication(request, selection)
        total_results = len(current_publications)
        return jsonify({
            "success": True,
            "publications": current_publications,
            "total_results": total_results,
        })
    except:
        abort(422)

    
# ----------------------------------------------------------------------------#
# Launch.
# ----------------------------------------------------------------------------#

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='127.0.0.1', port=port)