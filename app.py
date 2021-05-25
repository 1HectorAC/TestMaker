from re import template
from flask import Flask, render_template, url_for

app = Flask(__name__)

@app.route('/')
def main():
    return "test"