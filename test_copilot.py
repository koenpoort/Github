# Function to add two numbers
def add_numbers(a, b):
    # Observe Copilot suggesting the return statement
    return a + b
# Function to subtract two numbers
def subtract_numbers(a, b):
    # Observe Copilot suggesting the return statement
    return a - b
# Function to multiply two numbers
# Create a list of squares from 1 to 10
def multiply_numbers(a, b):
    # Observe Copilot suggesting the return statement
    return a * b
# Function to divide two numbers
def divide_numbers(a, b):
    # Observe Copilot suggesting the return statement
    if b == 0:
        raise ValueError("Cannot divide by zero")
    return a / b
# Function to calculate the square of a number
def square_number(a):
    # Observe Copilot suggesting the return statement
    return a * a
# Function to calculate the square root of a number
def square_root_number(a):
    # Observe Copilot suggesting the return statement
    if a < 0:
        raise ValueError("Cannot calculate square root of negative number")
    return a ** 0.5
# Function to calculate the factorial of a number
def factorial_number(a):
    # Observe Copilot suggesting the return statement
    if a < 0:
        raise ValueError("Cannot calculate factorial of negative number")
    if a == 0 or a == 1:
        return 1
    return a * factorial_number(a - 1)
# Function to calculate the power of a number

from flask import Flask

# Create a Flask application instance
app = Flask(__name__)

# Define a route for the root URL ('/')
@app.route('/')
def hello_world():
    # This function will be executed when someone accesses the root URL
    return 'Hello, World!'

# Run the application server
if __name__ == '__main__':
    # debug=True allows for automatic reloading during development
    app.run(debug=True) 
    