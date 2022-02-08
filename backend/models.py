from email.policy import default
import os
from xmlrpc.client import DateTime
from flask_sqlalchemy import SQLAlchemy
from flask import Flask
from flask_migrate import Migrate
from datetime import datetime, date, timezone


DB_HOST = os.getenv('DB_HOST', '127.0.0.1:5432')
DB_USER = os.getenv('DB_USER', 'postgres')
DB_PASSWORD = os.getenv('DB_PASSWORD', '1')
DB_NAME = os.getenv('DB_NAME', 'group_web')
DB_PATH = 'postgresql+psycopg2://{}:{}@{}/{}'.format(DB_USER, DB_PASSWORD, DB_HOST, DB_NAME)


db = SQLAlchemy()

'''
setup_db(app)
    binds a flask application and a SQLAlchemy service
'''

def db_setup(app, database_path=DB_PATH):
    app.config["SQLALCHEMY_DATABASE_URI"] = database_path
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    db.app = app
    db.init_app(app)
    migrate = Migrate(app, db)
    return db

'''
Opportunities
'''
class Opportunity(db.Model):
    __tablename__ = 'opportunity'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String)
    posted_at = db.Column(db.DateTime, default=datetime.utcnow)
    description = db.Column(db.String, nullable=False)

    def __init__(self, title, posted_at, description):
        self.title = title
        self.posted_at = posted_at
        self.description = description

    def insert(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

'''
People
'''

class People(db.Model):
    __tablename__ = 'people'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    position = db.Column(db.String)
    research = db.Column(db.String)
    email = db.Column(db.Integer)

    def __init__(self, name, position, research, email):
        self.name = name
        self.position = position
        self.research = research
        self.email = email

    def insert(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()


'''
Publication
'''


class Publication(db.Model):
    __tablename__ = 'publication'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String)
    year = db.Column(db.String)
    publisher = db.Column(db.String)
    author = db.Column(db.String)
    link = db.Column(db.String)
    cover = db.Column(db.String)

    def __init__(self, title, year, publisher, author, link, cover):
        self.title = title
        self.year = year
        self.publisher = publisher
        self.author = author
        self.link = link
        self.cover = cover

    def insert(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()
    
    def format(self):
        return {
            'id': self.id,
            'title': self.title,
            'author': self.author,
            'year': self.year,
            'publisher': self.publisher,
            'link': self.link,
            'cover': self.cover
        }