/*
There is a shop with old style cash registers. Rather than scanning items and pulling the price from
a database. the price of each item is typed in manually.This method sometimes leads to errors.
Given a list of items and their correct prices, compaire the prices to those entered when each item was sold
Determine the number of errors in selling prices.

Example
products = ['eggs','milk','cheese']
productPrices = [2.89,3.29,5.79]
productSold = ['eggs','eggs','cheese','milk']
soldPrice = [2.89,2.99,5.97,3.29]

            Price
Product    Actual    Expect      Error
eggs       2.89       2.89       
eggs       2.99       2.89        1        
cheese     5.97       5.79        1
milk       3.29       3.29

The second sale of eggs has wrong price , as does the sale of cheese.
There are 2 errors in pricing.

*/

function priceCheck(products, productPrices, productSold, soldPrice) {
    let errors = 0;
    const priceMap = new Map();
  
    // Populate the price map with correct prices
    for (let i = 0; i < products.length; i++) {
      priceMap.set(products[i], productPrices[i]);
    }
  
    // Check each sold item's price against the expected price
    for (let i = 0; i < productSold.length; i++) {
      const item = productSold[i];
      const expectedPrice = priceMap.get(item);
      const actualPrice = soldPrice[i];
  
      if (expectedPrice !== actualPrice) {
        errors++;
      }
    }
  
    return errors;
  }
  
  const products = ['eggs', 'milk', 'cheese'];
  const productPrices = [2.89, 3.29, 5.79];
  const productSold = ['eggs', 'eggs', 'cheese', 'milk'];
  const soldPrice = [2.89, 2.99, 5.97, 3.29];
  
  const errors = priceCheck(products, productPrices, productSold, soldPrice);
  console.log('Number of errors in pricing:', errors);
  
