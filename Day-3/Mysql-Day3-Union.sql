select first_name,last_name,email,phone
from customers
UNION all
select first_name,last_name,email,phone
from staffs;