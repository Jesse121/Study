
create table user(
    `id` INT UNSIGNED AUTO_INCREMENT KEY,
    `name` VARCHAR(20) NOT NULL,
    `pwd` VARCHAR(20) NOT NULL
)ENGINE=INNODB CHARSET=UTF8;