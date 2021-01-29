CREATE DEFINER=`root`@`localhost` PROCEDURE `GetAllUserOrders`(in start_date date, in end_date date)
BEGIN
	SELECT o.order_id ,c.first_name as CustomerName,c.city as CustomerCity,
	o.order_status as OrderStatus,o.order_date as OrderDate,
	oi.quantity as order_Items_Count,
	(oi.quantity  * oi.list_price)as Order_Total_value,
	s.store_id as StoreID,
	s.store_name as StoreName,
	s.city as StoreCity,
	st.staff_id as StaffID,
	st.first_name as StaffName,
	st.manager_id as ManagerID,
    s1.first_name as ManagerName
	from customers as c
	left join orders as o
	on c.customer_id=o.customer_id
	left join order_items as oi
	on o.order_id=oi.order_id
	left join stores as s
	on o.store_id=s.store_id
	left join staffs as st
	on st.staff_id=o.staff_id 
    left join staffs as s1
    on s1.manager_id = st.staff_id 
    where (o.order_date BETWEEN start_date AND end_date);
END