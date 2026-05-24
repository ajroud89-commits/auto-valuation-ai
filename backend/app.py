from flask import Flask
from flask_cors import CORS
from config import Config

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    
    # Enable CORS
    CORS(app)
    
    # Register blueprints
    from routes.analyze import analyze_bp
    from routes.price import price_bp
    from routes.specs import specs_bp
    
    app.register_blueprint(analyze_bp)
    app.register_blueprint(price_bp)
    app.register_blueprint(specs_bp)
    
    @app.route('/health', methods=['GET'])
    def health():
        return {'status': 'ok'}
    
    return app

if __name__ == '__main__':
    app = create_app()
    app.run(debug=True, port=5000)
