from flask import Flask, request, url_for, redirect, render_template
from stuview import takeData

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/C3', methods=['GET', 'POST'])
def C3():
    # Read the file and store in the array, after that paste to the HTML
    lockers_C3 = []
    with open('buildings/C3.txt', 'r') as file:
        for line in file:
            lockers_C3.append(line.strip('\n'))

    if request.method == 'POST':
        return redirect(url_for('index'))
    return render_template('C3.html', lockers_C3=lockers_C3)


@app.route('/fetchdata', methods=['GET','POST'])
def fetchData():
    takeData()
    return render_template('index.html')
