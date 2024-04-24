/*  
QUESTION 6
As part of HackerAd's advertising system anlitics, they need a list of the customers who have the most failures
and success in the compaigns.

There should be exactly two rows that contain type, customer, compaingn, total.

- type contains 'success' in the first and 'failure' in the second. These relate to events.status.
- customer is the customers.first_name and customers.last_name, separated by a single space.
- campaign is a comma-seperated list of campaigns.name that are associated with the customer, 
  ordered ascending.
- total is the number of associated events.

Report only 2 customers, the two with the most successful and the most falling campaiggns.

SQL SOLUTION 
*/

SELECT c.name AS company_name,
(c.revenue - c.expenses) AS profit
FROM companies c
JOIN compaigns ca ON c.id = ca.company_id
WHERE (ca.revenue - ca.expenses) > 0
ORDER BY profit DESC
LIMIT 2;
