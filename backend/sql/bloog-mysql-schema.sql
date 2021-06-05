create table if not exists genre
(
	genre_id int auto_increment primary key,
	genre_name varchar(80) not null unique
);

create table if not exists user
(
	user_id int auto_increment primary key,
	user_name varchar(80) not null unique,
	password_hash varchar(32) not null,
	first_name varchar(80) not null,
	last_name varchar(80) not null
);

create table if not exists book
(
	book_id int auto_increment primary key,
	book_name varchar(500) not null,
	author varchar(200) not null,
	image_file_name varchar(255) not null,
	genre_id int not null,
	constraint book_genre_genre_id_fk
		foreign key (genre_id) references genre (genre_id)
);

create table if not exists book_review
(
    review_id int auto_increment primary key,
    user_id int not null,
	book_id int not null,
	review_text varchar(5000) not null,
	constraint book_review_user_user_id_fk
		foreign key (user_id) references user (user_id),
	constraint book_review_book_book_id_fk
		foreign key (book_id) references book (book_id)
);

create or replace view book_review_v as 
select r.review_id, r.review_text, u.first_name, u.last_name,
       b.book_name, b.author, b.image_file_name, g.genre_name,
       concat('/assets/images/', b.image_file_name) as image_path
  from book_review r 
 inner join user  as u on u.user_id  = r.user_id
 inner join book  as b on r.book_id  = b.book_id
 inner join genre as g on b.genre_id = g.genre_id
