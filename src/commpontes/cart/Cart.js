/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Banner from '../banner/Banner';
import './cart.css';
import { Link } from 'react-router-dom';
import { MdRemoveShoppingCart } from 'react-icons/md';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Col, Container, Row } from 'react-bootstrap';
import { AiFillStar } from 'react-icons/ai';
import { BsStarHalf } from 'react-icons/bs';
import { RiDeleteBin2Line } from 'react-icons/ri';
const Cart = ({cart ,setcart}) => {
    //increment function
    const increment = (product) =>{
        const exit = cart.find((x) =>{
            return x.id === product.id
           })
           setcart(cart.map((curElm)=>{
            return curElm.id === product.id ?{...exit ,qty:exit.qty +1}: curElm
           }))
    }
    //decrement function 
    const decrement = (product) =>{
        const exit = cart.find((x) =>{
            return x.id === product.id
           })
           setcart(cart.map((curElm)=>{
            return curElm.id === product.id ?{...exit ,qty:exit.qty -1}: curElm
           }))
    }
    //remove product
     const removeProduct =(product) =>{
      const exit =cart.find((x) =>{
        return x.id === product.id
      })
      if(exit.qty > 0){
        setcart(cart.filter((x) =>{
            return x.id !== product.id
        }))
      }
     }
  return (
   <>
   <Banner tittle="Shopping Cart" smtittle ="Shopping Cart"/>
   <Container>
   <table className='table'>
   <tr className='tr'>
                     <th className='th th1'>Image</th>
                     <th className='th th2'>Product Information</th>
                     <th className='th th3'>Quantity</th>
                     <th className='th th4'>Total Price</th>
                     <th className='th th5'>Remove</th>
                     </tr>
   </table>
   </Container>
   {
   cart.length === 0
    &&
   <>
   <div className='embaty-cart'>
    <h2><span><MdRemoveShoppingCart /></span>The Cart Is Empty</h2>
    <Link to='/shop' className='link'><span> <AiOutlineArrowLeft/></span>continue shopping</Link>
   </div>
   </>
   }
   <div>
    <Container>
       <Row>
        {cart.map((curElm) => {
            return (
                <div className='cart-item' key={curElm.id}>
                    <div className='box'>
                    <div className='box1'>
                        <div className='img-box'>
                        <img src={curElm.Img} className='img'/>
                        </div>
                        </div>
                        <div className='box-1'>
                        <div className='box2'>
                        <div className='detail'>
                        <h4>{curElm.tittle}</h4>
                        <div className='icons'>
                                <AiFillStar className='icon'/>
                                <AiFillStar className='icon'/>
                                <AiFillStar className='icon'/>
                                <AiFillStar className='icon'/>
                                <BsStarHalf className='icon icon1'/>
                            </div>
                        <h5>price : {curElm.price}$</h5>
                    </div>
                        </div>
                        <hr/>
                        <div className='box3'>
                            <button onClick={() => decrement(curElm)}>-</button>
                            <h4>{curElm.qty}</h4>
                            <button onClick={() => increment(curElm)}>+</button>
                        </div>
                        <hr/>
                        <div className='box-2'>
                        <div className='box4'>
                            <p>${curElm.price * curElm.qty}</p>
                        </div>
                        <div className='box5'>
                            <button onClick={() => removeProduct(curElm)}>
                            <RiDeleteBin2Line />
                            </button>
                        </div> </div>
                        </div>                    
                    </div>

                </div>
            )
        })}
       </Row>       
    </Container>
   </div>
   </>
  )
}

export default Cart