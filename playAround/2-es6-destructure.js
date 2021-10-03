
const display = 'BMW';

const products = {
    display, // property shorthand : if property & value name is same, then keep single
    itemName:  'cocacola',
    description: 'xyz',
    price: 35,
    salesPrice: 50,
    rating: 4.2
}

products.itemName = 'lilly';
products['rating'] = 7.5;
console.log(products);

// change item name to iName
const {itemName: iName, description} = products; // property destruction
console.log('iName >>',iName);
console.log('description >>',description);
//console.log(itemName); // not defined
 
const transaction = (type, {price, salesPrice}) => {
    console.log('transaction >>',type, price, salesPrice);
}

transaction('order', products);