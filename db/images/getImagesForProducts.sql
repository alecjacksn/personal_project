SELECT mediumimage, largeimage, prodid  
from pictures 
JOIN products 
ON productid=prodid
ORDER BY prodid,id;


