INSERT INTO genre (genre_name) VALUES ('Science Fiction');
INSERT INTO genre (genre_name) VALUES ('Fantasy');
INSERT INTO genre (genre_name) VALUES ('Classics');
INSERT INTO genre (genre_name) VALUES ('Romance');

INSERT INTO book (book_name, author, image_file_name, genre_id)
     VALUES ('Lord of the Rings', 'J.R.R. Tolkien', 'lotr.png', (SELECT genre_id FROM genre WHERE genre_name = 'Fantasy'));
INSERT INTO book (book_name, author, image_file_name, genre_id)
     VALUES ('To kill a mockingbird', 'Harper Lee', 'mockingbird.png', (SELECT genre_id FROM genre WHERE genre_name = 'Classics'));
INSERT INTO book (book_name, author, image_file_name, genre_id)
     VALUES ('1984', 'George Orwell', '1984.png', (SELECT genre_id FROM genre WHERE genre_name = 'Science Fiction'));
INSERT INTO book (book_name, author, image_file_name, genre_id)
     VALUES ('Royal Holiday', 'Jasmine Guillory', 'royalholiday.png', (SELECT genre_id FROM genre WHERE genre_name = 'Romance'));

INSERT INTO user (user_name, password_hash, first_name, last_name) VALUES ('fabian', MD5('testpwd1'), 'Fabian', 'Schoening');
INSERT INTO user (user_name, password_hash, first_name, last_name) VALUES ('nyilha', MD5('testpwd2'), 'Nyilha', 'Drongshar');