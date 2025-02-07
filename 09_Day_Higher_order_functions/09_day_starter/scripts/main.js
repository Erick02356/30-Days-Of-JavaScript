const countries2 = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]

//countries2.forEach(country => console.log(country));

// names.forEach(name => {
//     const p = document.createElement('p');
//     p.textContent = name;
//     document.body.appendChild(p);
// })

//numbers.forEach(num => console.log(num));

// const UpperCountries = countries2.map((country) => country.toUpperCase());
// console.log(UpperCountries);

// const countriesLength =  countries2.map((country) => country.length)
// console.log(countriesLength)

// const numberSquare = numbers.map(num => num**2);
// console.log(numberSquare)

// const landCountry = countries2.filter(country => /land/i.test(country));
// console.log(landCountry)

// const sixCountry = countries2.filter(country => country.length === 6);
// console.log (sixCountry)


// const Ecountries = countries2.filter(country => country.startsWith('E'))
// console.log (Ecountries)

//Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
// const priceWithValues = products.filter(product => typeof product.price ===  "number")
// const getStringLists = (products) => {
//     return products.filter(product => typeof product.price !== "number")
// }

// const total = numbers.reduce((acc,num) => num+acc, 0)

// const sentence = countries2.reduce((acc, country, index, array) => {
//     const separator = index === array.length - 1 ? ' and ' : ', ';
//     return acc + separator + country;
//   });
  
//   console.log(`${sentence} are north European countries.`);


// const someName = names.every(name => name.includes('land'));

// LVL2

// const total = products.map(product => product.price).filter(price => typeof price === "number").reduce((acc,price) => price + acc,0)
// const total = products.reduce((acc,product,index,array) => {
//     if(typeof array[index].price === "number"){
//         return acc+product.price;
//     }
//     return acc
// },0)

// console.log(total)


