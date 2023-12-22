from flask import Flask, request, url_for, redirect, render_template
from stuview import takeData

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')


@app.route('/C1', methods=['GET', 'POST'])
def C1():
    # Read the file and store in the array, after that paste to the HTML
    lockers_C1 = []
    with open('buildings/C1.txt', 'r') as file:
        for line in file:
            lockers_C1.append(line.strip('\n'))

    if request.method == 'POST':
        return redirect(url_for('index'))
    return render_template('C1.html', lockers_C1=lockers_C1)

@app.route('/C2', methods=['GET', 'POST'])
def C2():
    # Read the file and store in the array, after that paste to the HTML
    lockers_C2 = []
    with open('buildings/C2.txt', 'r') as file:
        for line in file:
            lockers_C2.append(line.strip('\n'))

    if request.method == 'POST':
        return redirect(url_for('index'))
    return render_template('C2.html', lockers_C2=lockers_C2)

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

@app.route('/C4', methods=['GET', 'POST'])
def C4():
    # Read the file and store in the array, after that paste to the HTML
    lockers_C4 = []
    with open('buildings/C4.txt', 'r') as file:
        for line in file:
            lockers_C4.append(line.strip('\n'))

    if request.method == 'POST':
        return redirect(url_for('index'))
    return render_template('C4.html', lockers_C4=lockers_C4)

@app.route('/C5', methods=['GET', 'POST'])
def C5():
    # Read the file and store in the array, after that paste to the HTML
    lockers_C5 = []
    with open('buildings/C5.txt', 'r') as file:
        for line in file:
            lockers_C5.append(line.strip('\n'))

    if request.method == 'POST':
        return redirect(url_for('index'))
    return render_template('C5.html', lockers_C5=lockers_C5)

@app.route('/D3', methods=['GET', 'POST'])
def D3():
    # Read the file and store in the array, after that paste to the HTML
    lockers_D3 = []
    with open('buildings/D3.txt', 'r') as file:
        for line in file:
            lockers_D3.append(line.strip('\n'))

    if request.method == 'POST':
        return redirect(url_for('index'))
    return render_template('D3.html', lockers_D3=lockers_D3)


@app.route('/fetchdata', methods=['GET','POST'])
def fetchData():
    takeData()
    return render_template('index.html')
