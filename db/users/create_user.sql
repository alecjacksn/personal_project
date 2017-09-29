INSERT INTO users
(firstname, lastname, authid, email)
VALUES 
($1, $2, $3, $4)
RETURNING *;