from flask import Flask, request, jsonify
from pymongo import MongoClient

app = Flask(__name__)

# MongoDB-Verbindung herstellen
client = MongoClient("mongodb://localhost:27017/")
db = client["quiz_db"]

@app.route('/api/insertData', methods=['POST'])
def insert_data():
    category = request.json.get('category')
    if category not in ["Crewgröße", "Länge", "Preis", "Frachtkapazität"]:
        return jsonify({"message": "Ungültige Kategorie"}), 400

    # Alle Collections löschen
    for collection_name in db.list_collection_names():
        db.drop_collection(collection_name)

    # Daten basierend auf der gewählten Kategorie einfügen
    keywords_collection = db["quiz_schluesselwoerter"]

    if category == "Crewgröße":
        data = [
            {"name": "Aurora", "attribute": "Crewgröße", "value": 2},
            {"name": "Constellation", "attribute": "Crewgröße", "value": 4},
            {"name": "Reclaimer", "attribute": "Crewgröße", "value": 5},
            {"name": "Carrack", "attribute": "Crewgröße", "value": 6}
        ]
    elif category == "Länge":
        data = [
            {"name": "Constellation", "attribute": "Länge", "value": 75.6},
            {"name": "Aurora", "attribute": "Länge", "value": 22.0},
            {"name": "Reclaimer", "attribute": "Länge", "value": 150.0},
            {"name": "Carrack", "attribute": "Länge", "value": 125.0}
        ]
    elif category == "Preis":
        data = [
            {"name": "Aurora", "attribute": "Preis", "value": 25000},
            {"name": "Constellation", "attribute": "Preis", "value": 27500},
            {"name": "Reclaimer", "attribute": "Preis", "value": 45000},
            {"name": "Carrack", "attribute": "Preis", "value": 60000}
        ]
    elif category == "Frachtkapazität":
        data = [
            {"name": "Aurora", "attribute": "Frachtkapazität", "value": 2},
            {"name": "Constellation", "attribute": "Frachtkapazität", "value": 4},
            {"name": "Reclaimer", "attribute": "Frachtkapazität", "value": 6},
            {"name": "Carrack", "attribute": "Frachtkapazität", "value": 5}
        ]

    # Daten in die MongoDB einfügen
    keywords_collection.insert_many(data)

    return jsonify({"message": f"Daten für die Kategorie '{category}' wurden erfolgreich eingefügt."})

if __name__ == '__main__':
    app.run(debug=True)
