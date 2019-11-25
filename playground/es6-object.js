// Object property shorthand

const userName = 'Emmet'

const age = 31


// ES6 shorthand syntax
const firstUser = {
    userName,
    age,
    location: "Ireland"
}

console.log(firstUser)

// Previous syntax
const fruit = {
    type: "Apple",
    brand: "Granny Smith",
    price: 0.53,
    stock: 201,
    salePrice: undefined
}

// Previous syntax
/* const label = product.label
const stock = product.stock */

// ES6 destucturing syntax
const {type, price} = fruit;

console.log(type);
console.log(price)

// Rename Property
const {type: typeOfFruit} = fruit;
console.log(typeOfFruit);
console.log(price)

const {rating = 4.9} = fruit

console.log(rating)

const transaction = (type, {brand, price}) =>{
  console.log(type, brand, price)
}

transaction('Peach', fruit)