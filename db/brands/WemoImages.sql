SELECT mediumimage, largeimage, prodid  
from pictures 
JOIN products 
ON productid=prodid
WHERE brand = 'WeMo'
ORDER BY id,prodid