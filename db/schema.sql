DROP DATABASE IF EXISTS reviews_db;
CREATE DATABASE reviews_db;

\c reviews_db;

CREATE TABLE "items" (
  "id" INTEGER NOT NULL PRIMARY KEY,
  "type" VARCHAR(5) UNIQUE NOT NULL,
  "category" VARCHAR(30),
  "title" VARCHAR(50) UNIQUE NOT NULL,
  "collection" VARCHAR(30),
  "artist" VARCHAR(30),
  "composer" VARCHAR(30),
  "distributor" VARCHAR(30) NOT NULL,
  "length" INTEGER,
  "isbn" INTEGER UNIQUE,
  "author" VARCHAR(30),
  "publisher" VARCHAR(30) NOT NULL,
  "pagecount" INTEGER,
  "availability" VARCHAR(30) NOT NULL,
  "reviews" VARCHAR(400) UNIQUE NOT NULL,
  "rating" INTEGER,
  "paperback" VARCHAR(9),
  "edition" VARCHAR(50) NOT NULL,
  "novelization" VARCHAR(30),
  "director" VARCHAR(30),
  "adaption" VARCHAR(30),
  "soundtrack" VARCHAR(30),
  "genre" VARCHAR(30) NOT NULL,
  "year" INTEGER,
  "usersubmitted" INTEGER
);

CREATE TABLE "users" (
  "id" integer PRIMARY KEY,
  "username" varchar,
  "role" varchar,
  "created_at" timestamp
);

CREATE TABLE "reviews" (
  "review_id" integer,
  "user_id" integer,
  "username" varchar,
  "media_id" integer PRIMARY KEY,
  "rating" integer,
  "title" varchar,
  "body" text,
  "status" varchar,
  "created_at" timestamp
);

CREATE TABLE "availability" (
  "id" integer PRIMARY KEY,
  "location" varchar,
  "stock" varchar,
  "lastchecked" timestamp
);

COMMENT ON COLUMN "reviews"."body" IS 'Content of the post';

-- ALTER TABLE "items" ADD FOREIGN KEY ("usersubmitted") REFERENCES "users" ("id");

ALTER TABLE "reviews" ADD FOREIGN KEY ("media_id") REFERENCES "items" ("id");

-- ALTER TABLE "items" ADD FOREIGN KEY ("rating") REFERENCES "reviews" ("rating");

-- ALTER TABLE "users" ADD FOREIGN KEY ("id") REFERENCES "reviews" ("user_id");

-- ALTER TABLE "availability" ADD FOREIGN KEY ("location") REFERENCES "items" ("availability");

-- Insert data into the item table
INSERT INTO items (id, type, category, title, collection, artist, composer, distributor, isbn, author, publisher, pagecount, length, availability, reviews, rating, paperback, edition, adaption, novelization, director, soundtrack, genre, year) 
VALUES
--//prepolulate with sample books below:
(001, 'Book', 'Non Fiction', 'HelloBook!', 'The Hello World Series', NULL, NULL, 'DistroUSA', 1234, 'Mr. McAuthor', 'LJN Books', '42', NULL, 'SpringField Library', 'Great read!', '5', 'Hardcover', 'First Edition', 'The Life and Times of McAuthor', NULL, NULL, 'Sounds of Hello World', 'Horror', '2025'),
--//prepolulate with sample movies/shows/videos below:
(021, 'Video', 'Movie', 'Super Karate Monkey Death Car', NULL, NULL, NULL, 'MGM', NULL, NULL, 'View Askew', NULL, 142, 'Blockbuster Video', 'Horrible film!', '2', NULL, 'Two Disc Collectors Edition', NULL, 'I am America and so can YOU', 'Kevin James', 'SKMDC Official Soundtrack', 'Family', '1992'),
-- --//prepolulate with sample music below:
(031, 'Music', 'Easy Listening', 'Sounds of Nature', 'Soundscapes', NULL, NULL, 'Ramen Fuel', NULL, NULL, 'Not Null Records', NULL, 34, 'Tower Records', 'Who uses CDs anymore anyways?', '4', NULL, 'Standard Edition', NULL, NULL, NULL, NULL, 'Nature', '2004'),
--//prepolulate with sample games below:
(442, 'Game', 'Digital Downloads', 'The Elder Scrolls V 2: Even More Skyrim', 'TES', NULL, NULL, 'Bethesda', NULL, 'Todd', 'Microsoft', NULL, NULL, 'FuncoLand', 'So we are never going to get six are we?', '1', NULL, 'Absolute Legendary Extra Special Edition', 'Game of Thrones', 'A Song of Ice and Fire', NULL, NULL, 'Adventure', '3000')
;
SELECT * FROM items;
