DELIMITER //
CREATE PROCEDURE GetAllCustomers ()
BEGIN
	select * from customers;
END //
DELIMITER ;

call GetAllCustomers();