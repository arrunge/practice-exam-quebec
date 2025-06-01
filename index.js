const purchases = [
  {
    product: "Ergofit Wired Earbuds",
    category: "Electronics",
    quantity: 2,
    price: 12.99,
    mostLikedReviews: [
      {
        rating: 5,
        text: "Great noise-cancelling feature."
      }
    ]
  },
  {
    product: "LG Bluray Player Replacement Remote Control",
    category: "Electronics",
    quantity: 1,
    price: 6.99,
    mostLikedReviews: [
      {
        rating: 1,
        text: "Product didn't come with batteries."
      },
      {
        rating: 2,
        text: "Package was damaged."
      }
    ]
  },
  {
    product: "McCormick Grill Mates Chipotle Pepper Marinade (12 pk)",
    category: "Grocery",
    quantity: 3,
    price: 15.50,
    mostLikedReviews: [
      {
        rating: 1,
        text: "The marinade packets were damaged."
      }
    ]
  },
  {
    product: "Luxardo Gourmet Cocktail Cherries",
    category: "Grocery",
    quantity: 1,
    price: 24.45,
    mostLikedReviews: [
      {
        rating: 5,
        text: "You can taste the difference between these and marachinos."
      },
      {
        rating: 5,
        text: "I use these all the time for parties."
      }
    ]
  },
  {
    product: "Blood Pressure Monitor",
    category: "Medical Supplies and Equipment",
    quantity: 1,
    price: 49.99,
    mostLikedReviews: [
      {
        rating: 5,
        text: "Matches my blood pressure at the doctor's office."
      }
    ]
  }
];

// #1 // 
//I: object
//O: return array of subarray [key, value] if value is number data type
const getNumberEntries = (object) => {
  //output array
  let output = [];
  //loop through object
  for(let key in object){
    if(typeof(object[key]) === 'number'){
      //add [key, value] to output if value is number
    output.push([key, object[key]]);
    }
  }
  return output;
};
//I: object and additions - array of subarrays
//O: add addtiions to object and return object
// #2 // 
const addKeyValuePairs = (object, additions) => {
  //iterate through the additions array
  for(let index = 0; index < additions.length; index++){
    //add key value pairs to object
    let key = additions[index][0];
    let value = additions[index][1];
    object[key] = value;
  }
  //return object
  return object; 
};
//I: array and price
//O: filter array and return array of items with prices greater than param - price
// #3 //
const filterByPrice = (array, price) => {
  //output array
  let output = [];
  array.filter (function(item){
    //get item's price
    if(item.price > price){
      //if greater price add item
      output.push(item);
    }
  });
  return output;
};
//I: array - array of purchases
//O: return array of strings -> title(in all caps) - recent review
// #4 //
const mapPurchases = (array) => {
  //output array
  let output = [];
  array.map(function(item){
    let itemProduct = item.product;
    let len = item.mostLikedReviews.length;
    let itemRating = item.mostLikedReviews[len - 1].text;
    output.push(itemProduct.toUpperCase() + ' - Review: ' + itemRating);
  });
  return output;
};
//I: array - purchases
//output - use .reduce to create output string of words from the quality value
// #5 //
const accumulateString = (array) => {
  let output = array.reduce(function(acc, item){
    //subtract one to access corect index
    let index = item.quantity - 1;
    //get the product string as array to access word
    let productWords = item.product.split(' ');
    acc += productWords[index];
    return acc;
  }, '');
  return output;
  };
//I: array and product
//O: use recursion - if product matches - return array of [product description, catrgory]
//O: if no match - return [null, null]
// #6 //
const findProduct = (array, product, ) => {
  //BASE
 //if no matches
 if(array.length === 0){
  return [null, null];
}
  //if product matches
  if(array[0].product === product){
    return [product, array[0].category];
  }
   //Recursion
  return findProduct(array.slice(1), product);
};
//Input - array of purchases
//output array of products if review length is great than 35; use filter 
// #7 //
const filterByReviewLength = (array) => {
  //filter array to get all reviews over 35 and product
    return array.filter(function(item){
      for (let index = 0; index < item.mostLikedReviews.length; index++){ 
        if(item.mostLikedReviews[index].text.length > 35) {
          return item;
        }
     } 
    });
};


