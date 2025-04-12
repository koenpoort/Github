from flask import Flask, request, jsonify, render_template
import os

# Initialize Flask app
app = Flask(__name__)

# Define the main route to serve the HTML page
@app.route('/')
def index():
    return render_template('index.html')

# Define the sentiment analysis endpoint
@app.route('/analyze', methods=['POST'])
def analyze():
    data = request.get_json()
    text = data.get('text', '')

    if not text:
        return jsonify({'error': 'No text provided'}), 400

    # Placeholder for actual sentiment analysis logic
    # Replace this with your actual sentiment analysis model/API call
    sentiment = "neutral" # Example sentiment
    score = 0.5 # Example score

    # Simulate processing delay (optional)
    # import time
    # time.sleep(1)

    return jsonify({'sentiment': sentiment, 'score': score})

# Run the app
if __name__ == '__main__':
    # Use environment variable for port if available, otherwise default to 5000
    port = int(os.environ.get('PORT', 5000))
    # Run the app, accessible on the local network
    app.run(host='0.0.0.0', port=port, debug=True)

