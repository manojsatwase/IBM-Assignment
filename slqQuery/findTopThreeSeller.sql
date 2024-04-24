/* QUESTION  2

An online shop needs a new deal history feature . Create a query that returns a list of the top
three seller profiles with the higher total deals in june 2022.

The result should have the following colums: first_name | last_name | email | total.

- total - the total amount of all deals for a specific profile

The result should be sorted in decending order by total

The result be limited to the first three records

Note:
- Only deals for june 2022 should included in the report

Schema
          Profiles
Name            type          description
id              SALLINT       unique id primary key 
first_name     VARCHAR(255)
last_name      VARCHAR(255)
email          VARCHAR(255)
total          NUMBER

*/


SELECT 
first_name,
last_name,
email,SUM(amount) AS total
FROM 
  deals
JOIN
   sellers ON deals.seller_id = sellers.id
WHERE
    YEAR(deal_date) = 2022 AND MONTH(deal_date) = 6
GROUP BY
    first_name,
    last_name,
    email
ORDER BY
  total DESC
LIMIT 3;
