import { createContext, useContext, useReducer } from 'react'
import {faker} from '@faker-js/faker'
import { cartReducer,productReducer } from './Reducers';
const Cart = createContext();
faker.seed(99);
const Context = ({children}) => {

  const product = [...Array(20)].map(()=>({
    id: faker.string.uuid(),
    price: faker.commerce.price(),
    product: faker.commerce.product(),
    descrption: faker.commerce.productDescription(),
    name: faker.commerce.productName(),
    image: faker.image.urlLoremFlickr({ category: 'abstract' }),
    fastDelivery: faker.datatype.boolean(),
    rating: faker.helpers.arrayElement([1,2,3,4,5]),
    inStock:faker.helpers.arrayElement([0,2,5,8,12,14])

  }));
  const [state,dispatch] = useReducer(cartReducer,{
    products:product,
    cart:[]
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });
  return (
    <Cart.Provider value={{state,dispatch,productState, productDispatch}}> {children}</Cart.Provider>
  )
}

export default Context;
export const CartState = ()=>{
  return useContext(Cart);
}