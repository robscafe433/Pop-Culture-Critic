DROP DATABASE IF EXISTS media_db;
CREATE DATABASE media_db;

\c media_db;

CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  type VARCHAR(5) UNIQUE NOT NULL,
  category VARCHAR(30),
  item_name VARCHAR(50) UNIQUE NOT NULL,
  collection VARCHAR(30),
  artist VARCHAR(30),
  composer VARCHAR(30),
  distributor VARCHAR(30) NOT NULL,
  length INTEGER,
  isbn INTEGER UNIQUE,
  author VARCHAR(30),
  publisher VARCHAR(30) NOT NULL,
  pagecount INTEGER,
  availability VARCHAR(30) NOT NULL,
  rating INTEGER,
  paperback VARCHAR(9),
  edition VARCHAR(50) NOT NULL,
  novelization VARCHAR(30),
  director VARCHAR(30),
  adaption VARCHAR(30),
  soundtrack VARCHAR(30),
  genre VARCHAR(30) NOT NULL,
  year INTEGER,
  usersubmitted INTEGER
);

CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    item_id INT,
    review TEXT NOT NULL,
    FOREIGN KEY (item_id)
    REFERENCES items(id)
    ON DELETE SET NULL
);

CREATE TABLE localavailability (
    id SERIAL PRIMARY KEY,
    item_id INT,
    location_id INT,
    location_name VARCHAR(50) NOT NULL,
    stock INT,
    FOREIGN KEY (item_id)
    REFERENCES items(id)
    ON DELETE SET NULL
);
