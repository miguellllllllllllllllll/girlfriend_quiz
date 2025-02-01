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

    data_map = {
        "Crewgröße": [
            {"name": "Aurora", "attribute": "Crewgröße", "value": 2},
            {"name": "Constellation", "attribute": "Crewgröße", "value": 4},
            {"name": "Reclaimer", "attribute": "Crewgröße", "value": 5},
            {"name": "Carrack", "attribute": "Crewgröße", "value": 6}
        ],
        "Länge": [
            {"name": "Constellation", "attribute": "Länge", "value": 75.6},
            {"name": "Aurora", "attribute": "Länge", "value": 22.0},
            {"name": "Reclaimer", "attribute": "Länge", "value": 150.0},
            {"name": "Carrack", "attribute": "Länge", "value": 125.0}
        ],
        "Preis": [
            {"name": "Aurora", "attribute": "Preis", "value": 25000},
            {"name": "Constellation", "attribute": "Preis", "value": 27500},
            {"name": "Reclaimer", "attribute": "Preis", "value": 45000},
            {"name": "Carrack", "attribute": "Preis", "value": 60000}
        ],
        "Frachtkapazität": [
            {"name": "Aurora", "attribute": "Frachtkapazität", "value": 2},
            {"name": "Constellation", "attribute": "Frachtkapazität", "value": 4},
            {"name": "Reclaimer", "attribute": "Frachtkapazität", "value": 6},
            {"name": "Carrack", "attribute": "Frachtkapazität", "value": 5}
        ]
    }

    keywords_collection.insert_many(data_map[category])

    return jsonify({"message": f"Daten für die Kategorie '{category}' wurden erfolgreich eingefügt."})

@app.route('/api/aggregateData', methods=['GET'])
def aggregate_data():
    pipeline = [
        {
            "$group": {
                "_id": "$attribute",
                "total_value": {"$sum": "$value"},
                "average_value": {"$avg": "$value"},
                "max_value": {"$max": "$value"},
                "min_value": {"$min": "$value"},
                "count": {"$sum": 1}
            }
        }
    ]

    result = list(db["quiz_schluesselwoerter"].aggregate(pipeline))

    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)
