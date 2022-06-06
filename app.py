from flask import Flask, render_template, url_for,send_file

app = Flask(__name__)

@app.route('/')
def hello():
    return render_template('index.html')

@app.route('/js/<jsfile>')
def getjs(jsfile):
    return send_file('static/js/'+jsfile)

@app.route('/img/<imgfile>')
def getimg(imgfile):
    return send_file('static/img/'+imgfile)