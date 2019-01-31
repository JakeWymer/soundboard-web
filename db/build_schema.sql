CREATE TABLE IF NOT EXISTS users(
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(50),
    password VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS soundboards(
    soundboard_id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    soundboard_users INTEGER ARRAY,
    user_id INTEGER REFERENCES users(user_id)
);

CREATE TABLE IF NOT EXISTS sounds(
    sound_id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    url TEXT,
    user_id INTEGER REFERENCES users(user_id),
    soundboard_id INTEGER REFERENCES soundboards(soundboard_id)
);