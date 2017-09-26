SELECT mediumimage, largeimage, prodid  
from pictures 
JOIN products 
ON productid=prodid
WHERE producttype = 'smart_speaker'
ORDER BY prodid,id;