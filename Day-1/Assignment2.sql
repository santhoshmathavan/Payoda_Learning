SELECT customer_id,order_status
FROM orders
WHERE order_id=1;

CREATE INDEX idx ON orders(order_id,store_id);
drop index idx on orders;

Explain SELECT * FROM orders
where order_id=1
and store_id=1;


select P.product_name,B.brand_name
from brands B
inner join products P
on P.brand_id = B.brand_id
and B.brand_name='Nike';


create index od_Idx ON orders(order_id,customer_id);
create index cus_idx on customers(customer_id);
-- create index full_name on customers(first_name,last_name);

SELECT orders.order_id, customers.first_name,customers.last_name
FROM orders
INNER JOIN customers ON orders.customer_id = customers.customer_id;

show index from orders;