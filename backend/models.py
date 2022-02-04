import os
from xmlrpc.client import DateTime
from sqlalchemy import SQLAlchemy, Column, String, Integer
from flask import Flask
from datetime import datetime

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


def setup_db(app, database_path=DB_PATH):
    app.config["SQLALCHEMY_DATABASE_URI"] = database_path
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    db.app = app
    db.init_app(app)
    db.create_all()

'''
Opportunities
'''
class Opportunity(db.Model):
    __tablename__ = 'opportunity'
    id = Column(Integer, primary_key=True)
    position = Column(String)
    posted_at = Column(DateTime, nullable=False, default=datetime.utcnow)
    description = Column(String, nullable=False)

    def __init__(self, position, posted_at, desription):
        self.position = position
        self.posted_at = posted_at
        self.desription = desription

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

    id = Column(Integer, primary_key=True)
    name = Column(String)
    position = Column(String)
    research = Column(String)
    email = Column(Integer)

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

    # def format(self):
    #     return {
    #         'id': self.id,
    #         'question': self.question,
    #         'answer': self.answer,
    #         'category': self.category,
    #         'difficulty': self.difficulty
    #     }


'''
Publication
'''


class Publication(db.Model):
    __tablename__ = 'publication'
    id = Column(Integer, primary_key=True)
    position = Column(String)
    posted_at = Column(DateTime, nullable=False, default=datetime.utcnow)
    description = Column(String, nullable=False)

    def __init__(self, position, posted_at, description):
        self.position = position
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