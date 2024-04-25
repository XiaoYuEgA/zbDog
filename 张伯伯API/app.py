from flask import Flask, request
from flask_cors import CORS
import random, os, base64, sqlite3
from cos import cos

app = Flask(__name__)
app.config.from_object(__name__)
CORS(app, resources={r'/*': {'origins': '*'}}, supports_credentials=True)



conn = sqlite3.connect('zbSql.db', check_same_thread=False)
cursor = conn.cursor()
cursor.execute(
    """
        CREATE TABLE IF NOT EXISTS zb(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        zbdata TEXT
        );
        """
)


def insertData(userdata):
    try:
        cursor.execute('INSERT INTO zb(zbdata) VALUES (?)', (userdata,))
    except Exception as e:
        return f"ERROR: {e}"
    else:
        return "SUCCESS"


def selectData(id):
    try:
        cursor.execute('SELECT zbdata FROM zb WHERE id = ?', (id,))
        result = cursor.fetchone()
        return result
    except Exception as e:
        return f"ERROR: {e}"


@app.route("/get", methods=['GET'])
def get():
    cursor.execute('SELECT COUNT(*) FROM zb;')
    rowCount = cursor.fetchone()[0]
    randomID = random.randint(1, rowCount)
    result = selectData(randomID)
    return result[0]


TOKEN = 'zbzbwcnm'

@app.route('/add', methods=['GET'])
def addzb():
    __TOKEN = request.args.get('token')
    if __TOKEN != TOKEN:
        return "ERROR (-1) FUCKYOU"
    __zb = request.args.get('zb')
    if __zb == '':
        return 'ERROR (100) YOUR STRING IS NONE'
    try:
        insertData(__zb)
    except Exception as e:
        return f'ERROR (1000) {e}'
    else:

        return 'SUCCESS'


cos = cos()
@app.route("/getimg", methods=['GET'])
def getImg():
    try:
        __zbImagesUrl = cos.getImageUrl(cos.getImageName())
    except Exception as e:
        return {
            "code": '-1',
            'status': e
        }
    else:
        __randomUrl = random.choice(__zbImagesUrl)
        return  {"code": '200', "url": __randomUrl}


app.run(debug=False, host="0.0.0.0", port=12681)
