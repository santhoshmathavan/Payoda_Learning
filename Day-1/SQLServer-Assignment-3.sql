INSERT INTO customers(customer_id,first_name,last_name,phone,email,street,city,state,zip_code)
VALUES
(1,'ram','Kumar','9076842109','ram@gmail.com','ram Street','Syndey','Aus','47346'),
(2,'Kunal','Kumar','9076842109','kunal@gmail.com','ram Street','Syndey','Aus','47346'),
(3,'Ramya','Varshini','9876674210','ramya@gmail.com','Naidu Street','Trichy','TN','97546'),
(4,'Rudhra','Kumari','9076856789','rudhra@gmail.com','Dammal Street','Ladak','Ladak','00004'),
(5,'Vishu','Vardhan','9875562210','vishnu@gmail.com','Pappu Street','Trichy','TN','86544')

INSERT INTO brands(brand_id,brand_name)
VALUES
(4,'Western Hills'),
(5,'Nokia')

INSERT INTO categories(category_id,category_name)
VALUES (4, 'School'),
(5, 'Electronics')

SELECT * FROM categories;

INSERT INTO products(product_id,product_name,brand_id,category_id,model_year,list_pricel)
VALUES
(1,'Shoes',1,2,99,100),
(2,'Books',4,4,78,120),
(3,'Mobiles',5,5,99,100)


INSERT INTO stores(store_id,store_name,phone,email,street,city,state,zip_code)
VALUES
(1,'ShoeStore','99975657777','ss@gmail.com','ss Street','Zambia','Africa','898987'),
(2,'BookStore','99977777565','bs@gmail.com','bs Street','Blore','KA','124687'),
(3,'MiStore','56893777565','ms@gmail.com','ms Street','Cbe','TN','634528')

SELECT * FROM stores

INSERT INTO staffs(staff_id,first_name,last_name,email,phone,active,store_id,manager_id)
VALUES
(1,'Sundar','Moorthy','sm@gmail.com','9875673452','0',1,1),
(2,'Ishan','Kishan','ik@gmail.com','7345200756','1',2,2)

SELECT * FROM staffs

INSERT INTO orders(order_id,customer_id,order_status,order_date,required_date,shipped_date,store_id,staff_id)
VALUES
(2,1,'Not Shipped','2020-03-20','2020-03-30','2020-03-25',2,2),
(3,2,'Not Shipped','2020-03-15','2020-03-20','2020-03-18',2,2)

INSERT INTO order_items(order_id,item_id,product_id,list_price,discount)
VALUES
(2,2,2,75,5),
(3,3,3,85,10)

INSERT INTO stocks(store_id,product_id,quantity)
VALUES
(1,1,10),
(2,2,15),
(3,3,15)
