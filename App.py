from flask import Flask, request, jsonify
from db.connection import get_db_connection

app = Flask(__name__)
from flask import Flask
from flask_cors import CORS
CORS(app)  # This will enable CORS for all routes

@app.route('/api/search', methods=['POST'])
def locate_matching_files():
    search_keyword = request.json.get('search_text')
    db_connection = get_db_connection()
    db_cursor = db_connection.cursor()
    
    # Example query to find files containing the search keyword
    db_cursor.execute("SELECT file_name, COUNT(*) FROM files WHERE content LIKE :search_keyword GROUP BY file_name", 
                   {'search_keyword': f'%{search_keyword}%'})
    found_files = db_cursor.fetchall()
    
    # Format the response
    formatted_files = [{'name': row[0], 'occurrences': row[1]} for row in found_files]
    
    db_cursor.close()
    db_connection.close()
    
    # Return the response as JSON
    return jsonify(formatted_files)  # Return the list of dictionaries


@app.route('/api/mask', methods=['POST'])
def perform_text_masking():
    chosen_files = request.json.get('files')
    masking_symbol = request.json.get('mask_char')
    original_text = request.json.get('old_text')

    db_connection = get_db_connection()
    db_cursor = db_connection.cursor()

    try:
        for file_name in chosen_files:
            db_cursor.execute("UPDATE files SET content = REPLACE(content, :original_text, :masking_symbol) WHERE file_name = :file_name",
                           {'original_text': original_text, 'masking_symbol': masking_symbol, 'file_name': file_name})
        print(f"Files: {chosen_files}, Mask Symbol: {masking_symbol}, Original Text: {original_text}")

        db_connection.commit()
        return jsonify({"message": "Files masked successfully!"})
    
    except Exception as error_occured:
        db_connection.rollback() 
        return jsonify({"error": str(error_occured)}), 500  # Return error message if an exception occurs
    finally:
        db_cursor.close()
        db_connection.close()  # Ensure that the database connection is always closed


if __name__ == '__main__':
    app.run(debug=True)  # Start the Flask application in debug mode
