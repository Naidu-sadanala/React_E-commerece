import React from 'react'
import {Card ,Button} from 'react-bootstrap'
import Rating from './components/Rating'
import './Singlepro.css'
import { CartState } from './components/context/Context'
const SingleProduct = ({prod}) => {

  const {state:{cart}, dispatch } = CartState();

  return (
    <div className='products'>
        <Card>
            <Card.Img src={prod.image} alt={prod.name} variant='top' />
            <Card.Body>
                <Card.Title>{prod.name}</Card.Title>
                <Card.Subtitle style={{paddingBottom:10}}>
                    <span>₹{prod.price}</span>
                    {prod.fastDelivery?(<div>Fast Delivery</div>):(<div>4 Days Delivery</div>)}
                    <Rating rating={prod.rating} />
                    
                </Card.Subtitle>
                {cart.some((p) => p.id === prod.id) ? (
            <Button
              variant="danger"
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: prod,
                })
              }
            >
              Remove from Cart
            </Button>
          ) : (
            <Button
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: prod,
                })
              }
              disabled={!prod.inStock}
            >
              {!prod.inStock ? "Out of Stock" : "Add to Cart"}
            </Button>
          )}
          
                
               {/* <Button variant='danger'>Remove From the Cart</Button>
               <Button disabled={!prod.inStock}>{!prod.inStock?("Out of Stock"):("Add to Cart")}</Button> */}
          
                
                
                   
            </Card.Body>
        </Card>
    </div>
  )
}

export default SingleProduct