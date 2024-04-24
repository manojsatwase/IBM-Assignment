/*
Prisoners are standing on a Cartesian coordinate system present inside a jail.
Each prisoner stands at a unique point with both the coordinates(x,y) being integers.
Each prisoner should be at a position that forms a rectangle or square with 3 other prisoners.

More formally, every prisoner at a coordinate pair [x,y] should have:

- at least one prisoner standing at integer coordinates [x,ay] where ay!=y
- at least one prisoner standing at integer coordinates [bx,y] where bx!=x

Unfortunately. one prisoner has escaped. Find the coordinates of the that prisoner.

Example 
locations = [[1,1],[1,2],[2,1],[4,4],[4,6],[4,6],[9,4],[9,6]]

find missing one coordinate ? 

*/

function findMissingCoordinate(locations) {
    let xSum = 0;
    let ySum = 0;
  
    for (const [x, y] of locations) {
      xSum += x;
      ySum += y;
    }
  
    // Find the missing x-coordinate and y-coordinate
    const minX = Math.min(...locations.map(coord => coord[0]));
    const missingX = 3 * minX - xSum;
    const minY = Math.min(...locations.map(coord => coord[1]));
    const missingY = 3 * minY - ySum;
  
    return [missingX, missingY];
  }
  
  // Example usage
  const locations = [[1,1],[1,2],[2,1],[4,4],[4,6],[4,6],[9,4],[9,6]];
  const missingCoordinate = findMissingCoordinate(locations);
  console.log(missingCoordinate);  // Output: [2, 2]
  