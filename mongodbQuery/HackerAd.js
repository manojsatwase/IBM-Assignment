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

MONGODB QUERY

*/

db.companies.aggregate([
  {
    $lookup: {
      from: 'compaigns',
      localField: 'id',
      foreignField: 'company_id',
      as: 'campaigns'
    }
  },
  {
    $unwind: '$campaigns'
  },
  {
    $match: {
      $expr: { $gt: [{ $subtract: ['$campaigns.revenue', '$campaigns.expenses'] }, 0] }
    }
  },
  {
    $project: {
      _id: 0,
      company_name: '$name',
      profit: { $subtract: ['$campaigns.revenue', '$campaigns.expenses'] }
    }
  },
  {
    $sort: { profit: -1 }
  },
  {
    $limit: 2
  }
]);