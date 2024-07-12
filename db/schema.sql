DROP DATABASE IF EXISTS media_db;
CREATE DATABASE media_db;

\c media_db;

CREATE TABLE items (
    id INTEGER NOT NULL,
    type VARCHAR(5) UNIQUE NOT NULL,
    category VARCHAR(30),   
    title VARCHAR(50) UNIQUE NOT NULL,
    collection VARCHAR(30),
    isbn INTEGER UNIQUE,
    author  VARCHAR(30),
    publisher VARCHAR(30) NOT NULL,
    pagecount INTEGER,
    length INTEGER,
    availability VARCHAR(30) NOT NULL,
    reviews VARCHAR(400) UNIQUE NOT NULL,
    rating INTEGER,
    paperback VARCHAR(9),
    edition VARCHAR(50) NOT NULL,
    adaption VARCHAR(30),
    novelization VARCHAR(30),
    director VARCHAR(30),
    soundtrack VARCHAR(30),
    genre VARCHAR(30) NOT NULL,
    year INTEGER
    );

    -- Insert data into the item table
INSERT INTO items (id, type, category, title, collection, isbn, author, publisher, pagecount, length, availability, reviews, rating, paperback, edition, adaption, novelization, director, soundtrack, genre, year) 
VALUES
--//prepolulate with sample books below:
(001, 'Book', 'Non Fiction', 'HelloBook!', 'The Hello World Series', 1234, 'Mr. McAuthor', 'LJN Books', '42', NULL, 'SpringField Library', 'Great read!', '5', 'Hardcover', 'First Edition', 'The Life and Times of McAuthor', NULL, NULL, 'Sounds of Hello World', 'Horror', '2025'),
--//prepolulate with sample movies/shows/videos below:
(021, 'Video', 'Movie', 'Super Karate Monkey Death Car', NULL, NULL, NULL, 'MGM', NULL, 142, 'Blockbuster Video', 'Horrible film!', '2', NULL, 'Two Disc Collectors Edition', NULL, 'I am America and so can YOU', 'Kevin James', 'SKMDC Official Soundtrack', 'Family', '1992'),
--//prepolulate with sample music below:
(031, 'Music', 'Easy Listening', 'Sounds of Nature', 'Soundscapes', NULL, NULL, 'Ramen Fuel', NULL, 34, 'Tower Records', 'Who uses CDs anymore anyways?', '4', NULL, 'Standard Edition', NULL, NULL, NULL, NULL, 'Nature', '2004'),
--//prepolulate with sample games below:
(442, 'Game', 'Digital Downloads', 'The Elder Scrolls V 2: Even More Skyrim', 'TES', NULL, 'Todd', 'Microsoft', NULL, NULL, 'FuncoLand', 'So we are never going to get six are we?', '1', NULL, 'Absolute Legendary Extra Special Edition', NULL, 'A Song of Ice and Fire', NULL, NULL, 'Adventure', '1992');

SELECT * FROM items;
