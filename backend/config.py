import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    OPENAI_API_KEY = os.getenv('OPENAI_API_KEY')
    MARKTPLAATS_API_KEY = os.getenv('MARKTPLAATS_API_KEY')
    DATABASE_URL = os.getenv('DATABASE_URL')
    JWT_SECRET = os.getenv('JWT_SECRET', 'dev-secret-key')
    FLASK_ENV = os.getenv('FLASK_ENV', 'development')
    DEBUG = FLASK_ENV == 'development'
