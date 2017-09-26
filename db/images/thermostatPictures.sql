SELECT mediumimage, largeimage, prodid  
from pictures 
JOIN products 
ON productid=prodid
WHERE producttype = 'thermostat'
ORDER BY prodid,id;