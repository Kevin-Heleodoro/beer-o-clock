DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    fav_breweries TEXT ARRAY,
    city VARCHAR(25),
    state VARCHAR(2)
);

INSERT INTO users (name, fav_breweries, city, state) VALUES ('earl', '{Dogfish Head Brewery, Lagunitas Brewing Company}', 'Dallas', 'TX');

UPDATE users
    SET fav_breweries = array_append(fav_breweries, 'Samuel Adams')
    WHERE id = 1;