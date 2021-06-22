create table if not exists users_pg (
  id int not null,
  name varchar(150) not null,
  email varchar(150) unique not null
);
