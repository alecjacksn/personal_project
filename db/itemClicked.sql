-- SELECT *
-- from products 
-- JOIN pictures
-- ON productid=prodid
-- WHERE prodid = $1

SELECT * FROM PRODUCTS WHERE productid = $1
