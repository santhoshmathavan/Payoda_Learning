create table csv(
	id varchar(50),
    Gender varchar(25),
    Age int,
    Driving_license varchar(50),
    Region_Code float,
    Previously_Insured varchar(50),
    Vehicle_Age varchar(5),
    Vehicle_Damage varchar(50),
    Annual_Premium float, 
    Policy_Sales_Channel float,
    Vintage int,
    Response varchar(50)
);

select * from csv;

LOAD DATA LOCAL infile 'C:\\Users\\admin\\Desktop\\train.csv'
INTO TABLE csv 
CHARACTER SET latin2
FIELDS TERMINATED BY ','
ENCLOSED BY '"' LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

select * from csv;

drop table csv;

-- Query3 1.594sec/0.000sec
select * from csv where id=381105;
-- Duration 9.266sec
create index idindex on csv(id);
-- Query3 0.969sec/0.000sec
select * from csv where id=381105;

-- Query 4 Age Query 0.172sec/0.719sec
create index idx on csv (age);
select * from csv where age=28;

-- Query5 0.110sec/1.094sec
select * from csv where 
gender = 'male' and age>40;

select * from csv;

