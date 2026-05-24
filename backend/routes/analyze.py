"""API routes for vehicle analysis"""
from flask import Blueprint, request, jsonify

analyze_bp = Blueprint('analyze', __name__, url_prefix='/api/analyze')

@analyze_bp.route('/url', methods=['POST'])
def analyze_url():
    """
    Main endpoint: Accept URL and return full analysis
    """
    data = request.get_json()
    url = data.get('url')
    
    if not url:
        return jsonify({'error': 'URL required'}), 400
    
    return jsonify({
        'status': 'success',
        'message': 'Analysis started',
        'url': url
    }), 200

@analyze_bp.route('/photos', methods=['POST'])
def analyze_photos():
    """Analyze vehicle photos"""
    data = request.get_json()
    image_urls = data.get('image_urls', [])
    
    if not image_urls:
        return jsonify({'error': 'Image URLs required'}), 400
    
    return jsonify({'photos': [], 'status': 'success'}), 200
