# Use the official Python base image
FROM python:3.9

# Set the working directory inside the container
WORKDIR /app

# Copy the requirements.txt file into the container
COPY requirements.txt .

# Install Flask and other dependencies
RUN pip install --no-cache-dir -r requirements.txt

RUN pip install cryptography

# Copy the rest of the application code into the container
COPY . .

# Expose the port on which Flask app will run
EXPOSE 5000

# Start the Flask app when the container runs
CMD ["python", "app.py"]