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