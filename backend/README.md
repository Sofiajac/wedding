# Backend

## Setup environment

### Python virtual environment

#### Create
You only need to do this once.

    python3 -m venv ~/venvs/wedding

#### Activate
You need to do this when you start a new shell.

    source ~/venvs/wedding/bin/activate

### Install Python packages
You need to do this initially and when new packages have been added.

    pip install -r backend/requirements.txt

## Start the backend application

    backend/app.py

## Development
Activate the Python virtual environment. See above.

From the project root, change directory to `backend`:

    cd backend

### Install a new Python package
    pip install <package_name>
    pip freeze >> requirements.txt

### Export the database as a CSV file
    sqlite3 app.db -header -csv "SELECT * FROM rsvp;" > rsvp.csv

### Export the database as a JSON file
    sqlite3 app.db -header -json "SELECT * FROM rsvp;" > rsvp.json

## Deployment
From the project root:

    ./deploy.sh
