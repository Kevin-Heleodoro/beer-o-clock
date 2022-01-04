-- cat db/seed.sql | heroku pg:psql

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    fav_breweries TEXT ARRAY,
    city VARCHAR(25),
    state VARCHAR(2)
);

INSERT INTO users (name, fav_breweries, city, state) VALUES ('kevin', '{Dogfish Head Brewery, Lagunitas Brewing Company}', 'Boston', 'MA');
INSERT INTO users (name, fav_breweries, city, state) VALUES ('ashley', '{Tree House Brewing, Bissell Brothers Brewing, Maine Beer Company}', 'Boston', 'MA');
INSERT INTO users (name, fav_breweries, city, state) VALUES ('earl', '{Shiner Bock, Dos Equis}', 'Austin', 'TX');
INSERT INTO users (name, fav_breweries, city, state) VALUES ('samantha', '{Samuel Adams, Dos Equis}', 'Chicago', 'IL');
INSERT INTO users (name, fav_breweries, city, state) VALUES ('alex', '{Some Hipster Thing, Avocado Water}', 'Los Angeles', 'CA');

-- UPDATE users
--     SET fav_breweries = array_append(fav_breweries, 'Samuel Adams')
--     WHERE id = 1;