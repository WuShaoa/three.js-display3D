FROM python:3.8-slim

WORKDIR /app

ADD . /app

RUN pip install -r requirements.txt

CMD flask run --host 0.0.0.0 -p 80