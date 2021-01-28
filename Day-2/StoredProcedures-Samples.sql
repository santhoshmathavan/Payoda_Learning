CREATE PROCEDURE GetAllCustomers
AS  
BEGIN  
    Select * from customers  
END  
GO  

EXEC GetAllCustomers

CREATE PROCEDURE myproc
as 
begin
    return 1
end
go

declare @i int
exec @i = myproc
print @i

