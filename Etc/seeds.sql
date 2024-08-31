INSERT INTO items (type, category, item_name, collection, artist, composer, distributor, isbn, author, publisher, pagecount, length, availability, rating, paperback, edition, director, genre, year) 
VALUES
--//prepolulate with sample books below:
('Book', 'Non Fiction', 'HelloBook!', 'The Hello World Series', NULL, NULL, 'DistroUSA', 1234, 'Mr. McAuthor', 'LJN Books', '42', NULL, 'SpringField Library', '5', 'Hardcover', 'First Edition', NULL, 'Horror', '2025'),
--//prepolulate with sample movies/shows/videos below:
('Video', 'Movie', 'Super Karate Monkey Death Car', NULL, NULL, NULL, 'MGM', NULL, NULL, 'View Askew', NULL, 142, 'Blockbuster Video', '2', NULL, 'Two Disc Collectors Edition', 'Kevin James', 'Family', '1992'),
-- --//prepolulate with sample music below:
('Music', 'Easy Listening', 'Sounds of Nature', 'Soundscapes', NULL, NULL, 'Ramen Fuel', NULL, NULL, 'Not Null Records', NULL, 34, 'Tower Records', '4', NULL, 'Standard Edition', NULL, 'Nature', '2004'),
--//prepolulate with sample games below:
('Game', 'Digital Downloads', 'The Elder Scrolls V 2', 'TES', NULL, NULL, 'Bethesda', NULL, 'Todd', 'Microsoft', NULL, NULL, 'FuncoLand', '1', NULL, 'Extra Special Edition', NULL, 'Adventure', '3000')
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

INSERT INTO othermedia (item_id, movie_adaption, tvshow, novel, soundtrack, audiobook)
VALUES  (1, 'The Book of Mormon: The Movie', NULL, '"The Book of Mormon: The Movie" The Novelization', 'Original Broadway Recording: The Book of Mormon', 'The Book of Mormon: as read by William Shatner'),
        (2, NULL, NULL, NULL, 'I am America and so can You', 'Super Karate Monkey Death Car - The Audio Book'),
        (3, 'Planet Earth', NULL, 'The Big Bang', NULL, NULL),
        (4, 'Lord of the Rings', 'Game of Thrones', 'A Song of Ice and Fire', 'Sounds of Hesitation', 'Skyrim - The Audio Book, read by Amazon`s Alexa');