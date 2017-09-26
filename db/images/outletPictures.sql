SELECT mediumimage, largeimage, prodid  
from pictures 
JOIN products 
ON productid=prodid
WHERE producttype = 'outlet'
ORDER BY prodid,id;