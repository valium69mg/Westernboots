CREATE TABLE items (
    item_id SERIAL NOT NULL,
    title varchar(255) NOT NULL,
    description varchar(255) NOT NULL,
    price FLOAT NOT NULL,
    image_url varchar(255) NOT NULL,
    PRIMARY KEY (item_id)
);
