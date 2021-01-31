CREATE TEMPORARY TABLE table1
SELECT MONTH(o.order_date) AS months,
o.store_id AS storeId,
s.store_name AS storeName,
ROUND((COUNT(o.order_id))/3) AS AvgOrders 
FROM orders o
LEFT JOIN stores s
ON s.store_id=o.store_id
where YEAR(o.order_date) IN ( 2017,2018,2019)
GROUP BY MONTH(o.order_date)
ORDER BY MONTH(o.order_date)
;

select * from table1;
drop table table1;

CREATE TEMPORARY TABLE Table2
SELECT MONTH(o.order_date) AS months,
YEAR(o.order_date) AS years,
o.store_id AS StoreID,
s.store_name AS storeName,
COUNT(o.order_id) AS OrderCount 
FROM orders o 
LEFT JOIN stores s
ON s.store_id=o.store_id
WHERE YEAR(o.order_date) = 2020
GROUP BY MONTH(o.order_date)
ORDER BY MONTH(o.order_date);

select * from table2;

SELECT t2.months AS months,
t2.years as Years,
t2.orderCount as OrderCOunt,
t1.AvgOrders as AvgOrders,
case
	when(orderCount > t1.AvgOrders) then 'Increase'
    when(orderCount < t1.AvgOrders) then  'Decrease'
END AS SalesDirection
FROM table2 t2
LEFT JOIN table1 t1
ON t2.months = t1.months
GROUP BY months
ORDER BY months;

