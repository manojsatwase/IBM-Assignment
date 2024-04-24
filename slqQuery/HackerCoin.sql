
/*----------------------------------------*/
/* QUESTION 3
As part of the developer of the "HackerCoin" cryptocurrency exchange platform, create a query that return a list of ethereum 
wallets and their balances based on transaction amounts.

Due to the dummy data nature of the development process, some wallets may end up with a negative balance.
Be sure to exclusive them from the report.

The result should have the following columns: address | transaction | balance

-address- wallet address
- transactions - the number of confirmed transactions in a specific wallet;
a confirmed transaction is one with confirmations >= 10
- balance - the sum of all the amount for all confirmed transaxtion in specific wallet

The result should be sorted in decending order by balance

Note
- only transactions with ten or more confirmations should be included in the report.
- only wallets with a balance greater than zero should be included in the report.

*/


SELECT
    w.address AS address,
    COUNT(t.id) AS transactions,
    SUM(t.amount) AS balance
FROM
   wallets w
JOIN
    transactions t ON w._id = t.wallet_id
WHERE
   t.confirmations >= 10
GROUP BY
   w.address
HAVING
   SUM(t.amount) > 0
ORDER BY
    balance DESC;