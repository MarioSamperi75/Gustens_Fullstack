create table product
(
    id bigint not null,
    namn varchar(255) not null,
    ursprung varchar(255) not null,
    scoville int not null,
    styckpris int not null,
    antal int not null,
    primary key(id)

);
