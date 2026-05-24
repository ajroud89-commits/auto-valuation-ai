"""API routes for price comparison"""
from flask import Blueprint, request, jsonify

price_bp = Blueprint('price', __name__, url_prefix='/api/price')

@price_bp.route('/compare', methods=['POST'])
def compare_price():
    """Compare vehicle price to market"""
    data = request.get_json()
    
    return jsonify({
        'market_analysis': {},
        'alternatives': [],
        'status': 'success'
    }), 200
