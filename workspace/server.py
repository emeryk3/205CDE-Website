from flask import Flask, render_template, redirect, url_for
import os
from flask_bootstrap import Bootstrap
from flask_wtf import Form
from wtforms import StringField, TextAreaField, SubmitField
from wtforms.validators import DataRequired, Length
import sqlite3

app = Flask(__name__)
app.config.update(dict(
    DATABASE=os.path.join(app.root_path, 'recordstats.db'),
    SECRET_KEY='development key'
))
Bootstrap(app)

@app.route('/')
def send_static():
    pass

@app.route('/Home')
def Home():
    return render_template('MainPage.html')
    
@app.route('/aboutus')
def aboutus():
    return render_template('AboutePage.html')
    
@app.route('/contactus')
def contactus():
    return render_template('ContactUs.html')

@app.route('/exercise')
def exercise():
    return render_template('Exercise.html')

@app.route('/exercisecompound')
def exercisecompound():
    return render_template('exercisecompound.html')

@app.route('/exerciseisolated')
def exerciseisolated():
    return render_template('exerciseisolated.html')

@app.route('/flask_sqlite')
def flasksqlite():
    return render_template('flask_sqlite.html')
    
@app.route('/gendermale')
def gendermale():
    return render_template('GenderMale.html')

@app.route('/genderfemale')
def genderfemale():
    return render_template('GenderFemale.html')
    
@app.route('/Legends')
def legends():
    return render_template('Legends.html')

@app.route('/MainPage')
def MainPage():
    return render_template('MainPage.html')
    
@app.route('/Nutrition')
def Nutrition():
    return render_template('Nutrition.html')

@app.route('/Tutorial')
def Tutorial():
    return render_template('Tutorial.html')

#FORM FOR DATABASE
class CommentForm(Form):
    name = StringField('Name:', validators=[DataRequired()])
    comments = TextAreaField('Comments', validators=[DataRequired(), Length(min=1, max=100)])
    submit = SubmitField('Submit')
    
#INSERT DATA INTO DATABASE
@app.route('/Form', methods=['GET', 'POST'])
def view_form():
    form = CommentForm()
    if form.validate_on_submit():
        name = form.name.data
        comments = form.comments.data
        with sqlite3.connect(app.config['DATABASE']) as con:
            cur = con.cursor()
            cur.execute("INSERT INTO comments_table (name, comments) VALUES (?,?)", (name, comments))
            con.commit()

        return redirect(url_for('list_results'))
    return render_template('Form.html', form=form)

#DATABASE INFORMATION DISPLAY
@app.route('/display')
def list_results():
    with sqlite3.connect(app.config['DATABASE']) as con:
        con.row_factory = sqlite3.Row
        cur = con.cursor()
        cur.execute("SELECT * FROM comments_table")
        entries = cur.fetchall()
        return render_template('Comments.html', entries=entries)

#server
if __name__ == '__main__':
    app.run(port=8080, host='0.0.0.0', debug=True)
    
    
        
        
        