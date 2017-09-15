SELECT mediumimage, largeimage, prodid  
from pictures 
JOIN products 
ON productid=prodid
WHERE google = 1