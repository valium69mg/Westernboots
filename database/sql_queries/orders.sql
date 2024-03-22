CREATE TABLE orders (
    order_id SERIAL NOT NULL,
    email varchar(255) NOT NULL,
    number varchar(255) NOT NULL,
    direction varchar(255) NOT NULL,
    item_id int NOT NULL,
    PRIMARY KEY (order_id),
    FOREIGN KEY (item_id) REFERENCES items(item_id)
);