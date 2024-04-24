/*

QUESTION 5

 create a query for an online streaming service. it should return a list of clients,
 their number of streaming and the total amount of traffic.
 
 The result should have the following columns: mac_address | streams | total_traffic

 - mac_address - client MAC address
 - streams - total number of streams for a specific client
 - total_traffic - total traffic amount of all streams for a specific client

 The result should be sorted in descending order by total_traffic.

 Note 
 - only stream of 720 quality should be including in the result

 */

 db.clients.aggregate([
    {
      $lookup: {
        from: 'streams',
        localField: 'client_id',
        foreignField: 'client_id',
        as: 'client_streams'
      }
    },
    {
      $unwind: '$client_streams'
    },
    {
      $match: {
        'client_streams.quality': { $in: ['720p', '1080p', '1440p', '2160p'] }
      }
    },
    {
      $group: {
        _id: '$mac_address',
        streams: { $sum: 1 },
        total_traffic: { $sum: '$client_streams.traffic' }
      }
    },
    {
      $sort: { total_traffic: -1 }
    },
    {
      $project: {
        _id: 0,
        mac_address: '$_id',
        streams: 1,
        total_traffic: 1
      }
    }
  ]);