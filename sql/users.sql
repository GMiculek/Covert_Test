CREATE DATABASE users;

use users;

CREATE TABLE users (
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email    VARCHAR(255) NOT NULL,
    PRIMARY KEY (username)
);

INSERT INTO users



VALUES("GMiculek", "7f544dc8df9d39676ac530a170ad9df15f8d9930ecedd91fb36f3e1d72b8a3f0", "garrett.miculek@gmail.com"),
("lo", "54b2001aaac8e3de22f95b10f19a82ba413f89d808324e63d7d41c0d8ba43826", "joshloganjohnston@gmail.com"),
("averie", "97ee2fb7dd48217b745811990c6af2575e8d82a7a08210a6e2a4d41580bd4f9c", "averie.hardy@gmail.com");