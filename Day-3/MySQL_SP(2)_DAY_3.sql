DELIMITER //
CREATE PROCEDURE USP_CreateProduct(in productName varchar(10),
								   in categoryName varchar(10),
                                   in brandName varchar(10),
                                   in model_year varchar(10),
                                   in list_price varchar(10))
BEGIN 
    IF EXISTS(SELECT product_id from products where product_name=productName) THEN
    BEGIN
		SELECT LAST_INSERT_ID();
    END;
    
    ELSE
		BEGIN
			INSERT INTO categories(category_name) VALUES(categoryName);
            SET @CAT_ID = LAST_INSERT_ID();
        
			INSERT INTO brands(brand_name) VALUES(brandName);
            SET @BAT_ID = LAST_INSERT_ID();
        
			INSERT INTO products(product_name,brand_id,category_id,model_year,list_pricel)values
			(productName,@BAT_ID,@CAT_ID,model_year,list_price);
            SELECT @CAT_ID,@BAT_ID;
		END;
    END IF;
END //
DELIMITER ;

-- call USP_CreateProduct('pizza','pen','Aus','99','100',@product_out_id,@category_out_id,@brand_out_id);
drop procedure USP_CreateProduct;

call USP_CreateProduct('Mi9','China','Mi','199','200');

select * from products;
select * from categories;
select * from brands;