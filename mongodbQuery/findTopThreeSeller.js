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

db.deals.aggregate([
    {
      $match: {
        deal_date: {
          $gte: ISODate('2022-06-01'),
          $lt: ISODate('2022-07-01')
        }
      }
    },
    {
      $lookup: {
        from: 'sellers',
        localField: 'seller_id',
        foreignField: 'id',
        as: 'seller'
      }
    },
    {
      $unwind: '$seller'
    },
    {
      $group: {
        _id: {
          first_name: '$seller.first_name',
          last_name: '$seller.last_name',
          email: '$seller.email'
        },
        total: { $sum: '$amount' }
      }
    },
    {
      $sort: { total: -1 }
    },
    {
      $limit: 3
    },
    {
      $project: {
        _id: 0,
        first_name: '$_id.first_name',
        last_name: '$_id.last_name',
        email: '$_id.email',
        total: 1
      }
    }
  ]);
  