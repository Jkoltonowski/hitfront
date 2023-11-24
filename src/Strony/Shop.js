import React, {useState,useEffect} from 'react';
import Navbar2 from '../compo/navbar2/Navbar2';
import Product from '../compo/Product/Product';
import { listProducts } from '../actions/productAction';
import Loader from '../compo/Loader/Loader';
import Message from '../compo/Message/Message';
import { useDispatch,useSelector } from 'react-redux';
import {Row,Col} from "react-bootstrap";
import "./cssy/shop.css";
function Shop() {
  const dispatch = useDispatch();
  const productList = useSelector((state)=>state.productList);
  const {error,loading,products} =productList
  useEffect(()=>{
      dispatch(listProducts());
  },[dispatch])

  return (
    <div>
      <Navbar2/>
      <div className='shop'>     
            <h1 className="text-center">Produkty</h1>

            {loading ?(
                <Loader />
            ):error ?(
              <Message variant='danger'>{error}</Message>
            ):
            
            <Row>
               {products.map((product)=>(
                   <Col key={product._id} sm={12} md={6} lg={4} xl={3}>

                       {/* <h3>{product.name}</h3> */}
                       <Product  product={product}/>
                   </Col>
               ))} 
            </Row>    
            }
            
        </div>
    </div>
  )
}

export default Shop
