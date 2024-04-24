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

 SQL SOLUTION

 SELECT 
     clients.mac_address AS mac_address,
     COUNT(streams.stream_id) AS streams,
     SUM(streams.traffic) AS total_traffic
FROM
  clients
JOIN 
  streams ON clients.client_id = streams.client_id
WHERE 
  streams.quality IN ('720p','1080p','1440p','2160p')
GROUP BY
  clients.mac_address
ORDER BY
  total_traffic DESC
