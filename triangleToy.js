/*
In the assemly line, the factor assemles three parts 'a' 'b' 'c' of a triangle toy. A valid toy
is one where the two shorter sided added together are greater in length than the longest side

There are two forms of valid tringles to identify

- if 2 parts are of equal length, the form is "isosceles"
- if all 3 parts are of equal length , the form is "Equilateral"

if a toy is not valid or is not one of the those 2 form , it is "None of these".

Example 
tringleToy = ['221',''333','345','113']

- The first tringle is valid and has 2 equal parts, so the form is "isosceles"
- The second is valid and has 3 equal parts. so the form is "Equilateral"
- The third is valid but not one of the two specific forms
- The fourth is not valid. The two sides of 1 unit length cannot meet if the third side is 3 units
- The result is ["isosceles","Equilateral","None of these","None of these"]
*/

function determineTriangleForm(triangleToys) {
    const forms = [];
    for (let toy of triangleToys) {
      const sides = toy.split('').map(Number).sort((a, b) => a - b);
      const [shortest, middle, longest] = sides;
      if (shortest + middle > longest) {
        if (shortest === middle && middle === longest) {
          forms.push("Equilateral");
        } else if (shortest === middle || middle === longest) {
          forms.push("Isosceles");
        } else {
          forms.push("None of these");
        }
      } else {
        forms.push("None of these");
      }
    }
    return forms;
  }
  
  const triangleToys = ['221', '333', '345', '113'];
  const forms = determineTriangleForm(triangleToys);
  console.log(forms); // Output: ["Isosceles", "Equilateral", "None of these", "None of these"]
  