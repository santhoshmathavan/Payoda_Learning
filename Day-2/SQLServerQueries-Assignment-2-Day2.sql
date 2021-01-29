use DB

select * from train

select
sum(case when gender='Male' then 1 else 0 end) as Total_Number_Of_Male_Employee,
sum(case when gender='Female' then 1 else 0 end) as Total_Number_Of_Female_Employee
from train
group by response
having response=1;

select
sum(case when gender='Male' then 1 else 0 end) as Total_Number_Of_Male_Employee,
sum(case when gender='Female' then 1 else 0 end) as Total_Number_Of_Female_Employee,
Response
from train
group by response
having response=0 or response=1;

select avg(age) as Average_Age_of_Male
from train
where gender='Male' and response=1;

select max(Annual_Premium) as Maximum_Annual_Premium
from train
where gender='Female' and Response=1;

select * from train

select count(Vehicle_Age) as Vechile_Age,Vehicle_Age
from train
group by Vehicle_Age