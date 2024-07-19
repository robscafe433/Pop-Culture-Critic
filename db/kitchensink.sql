-- Kitchen Sink //All Schema, Seed, and Query information available for testing with a single entry

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

INSERT INTO items (type, category, item_name, collection, artist, composer, distributor, isbn, author, publisher, pagecount, length, availability, rating, paperback, edition, adaption, novelization, director, soundtrack, genre, year) 
VALUES
--//prepolulate with sample books below:
('Book', 'Non Fiction', 'HelloBook!', 'The Hello World Series', NULL, NULL, 'DistroUSA', 1234, 'Mr. McAuthor', 'LJN Books', '42', NULL, 'SpringField Library', '5', 'Hardcover', 'First Edition', 'The Life and Times of McAuthor', NULL, NULL, 'Sounds of Hello World', 'Horror', '2025'),
--//prepolulate with sample movies/shows/videos below:
('Video', 'Movie', 'Super Karate Monkey Death Car', NULL, NULL, NULL, 'MGM', NULL, NULL, 'View Askew', NULL, 142, 'Blockbuster Video', '2', NULL, 'Two Disc Collectors Edition', NULL, 'I am America and so can YOU', 'Kevin James', 'SKMDC Official Soundtrack', 'Family', '1992'),
-- --//prepolulate with sample music below:
('Music', 'Easy Listening', 'Sounds of Nature', 'Soundscapes', NULL, NULL, 'Ramen Fuel', NULL, NULL, 'Not Null Records', NULL, 34, 'Tower Records', '4', NULL, 'Standard Edition', NULL, NULL, NULL, NULL, 'Nature', '2004'),
--//prepolulate with sample games below:
('Game', 'Digital Downloads', 'The Elder Scrolls V 2', 'TES', NULL, NULL, 'Bethesda', NULL, 'Todd', 'Microsoft', NULL, NULL, 'FuncoLand', '1', NULL, 'Extra Special Edition', 'Game of Thrones', 'A Song of Ice and Fire', NULL, NULL, 'Adventure', '3000')
;

INSERT INTO reviews (item_id, review)
VALUES (1, 'Main character is underrated. Give that hornbill a sequel!'),
       (2, 'I''m gonna make him an offer you can''t refuse'),
       (1, 'This is the book everyone loves to hate'),
       (3, 'Ten years of ballet and three years of tap to join a gang in this neighborhood'),
       (4, 'The tin man gave a metallic, hollow performance'),
       (1, 'Hakuna matata'),
       (4, 'Those flying monkeys are nightmare fuel!'),
       (1, 'Great read!'),
       (2, 'Horrible film!'), 
       (3, 'Who uses CDs anymore anyways?'), 
       (4, 'So we are never going to get six are we?');

INSERT INTO localavailability (item_id, location_name, stock)
VALUES  (1, 'Blockbuster Video', 42),
        (2, 'Blockbuster Video', 1),
        (3, 'Blockbuster Video', 4),
        (4, 'Blockbuster Video', 7),
        (4, 'Blockbuster Video', 9),
        (1, 'Hollywood Video', 4),
        (2, 'RST Video', 8),
        (3, 'Your Local Library', 4);
       
-- *******EVERYTHING BELOW*******
-- SELECT items.item_name, items.type, category, item_name, collection, artist, composer, distributor, isbn, author, publisher, pagecount, length, availability, rating, paperback, edition, adaption, novelization, director, soundtrack, genre, year, reviews.review
-- FROM reviews
-- LEFT JOIN items
-- ON reviews.item_id = items.id
-- ORDER BY items.item_name;

-- Item Detail Only (Currently Book Oriented Query// items will eventually be split up into multiple tables)
SELECT items.item_name, items.type, category, isbn, author, publisher, pagecount, length, rating, paperback, edition, adaption, director, genre, year
FROM reviews
LEFT JOIN items
ON reviews.item_id = items.id
ORDER BY items.item_name;

-- Name and Reviews
SELECT items.item_name, reviews.review
FROM reviews
LEFT JOIN items
ON reviews.item_id = items.id
ORDER BY items.item_name;

-- Location Based Availability
SELECT items.item_name, location_name, stock
FROM localavailability
LEFT JOIN items
ON localavailability.item_id = items.id
ORDER BY items.item_name;
