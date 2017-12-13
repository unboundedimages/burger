USE burger_db

INSERT INTO burgers (burger_name, devoured, date)
VALUE ("CHEESEBURGER", TRUE, CURRENT_TIMESTAMP);

INSERT INTO burgers (burger_name, devoured, date)
VALUE ("Double CHEESEBURGER", TRUE, CURRENT_TIMESTAMP);

INSERT INTO burgers (burger_name, devoured, date)
VALUE ("HEART ATTACK CHEESEBURGER", TRUE, CURRENT_TIMESTAMP);

INSERT INTO burgers (burger_name, devoured, date)
VALUE ("HEART ATTACK BURGER", false, CURRENT_TIMESTAMP);

INSERT INTO burgers (burger_name, devoured, date)
VALUE ("SLAP YO ME-MA BURGER", false, CURRENT_TIMESTAMP);