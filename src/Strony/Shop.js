import React, { useState, useEffect } from 'react';
import Navbar2 from '../compo/navbar2/Navbar2';
import Product from '../compo/Product/Product';
import Loader from '../compo/Loader/Loader';
import Message from '../compo/Message/Message';
import { useDispatch, useSelector } from 'react-redux';
import Filters from '../compo/Filters/Filters';
import { listProducts } from '../actions/productAction';
import "./cssy/shop.css";
import Stopa2 from '../compo/stopa2/Stopa2';
import Stopa from '../compo/stopa/Stopa';

function Shop() {
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { error, loading, products } = productList;
    const [filters, setFilters] = useState({}); 

    useEffect(() => {
        dispatch(listProducts(filters));
    }, [dispatch, filters]);

    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
    };

    return (
        <div className='all'>
            <Navbar2/>
            <div className='shop'>
                <div className='shop-content'>
                    <div className='filters'>
                        <Filters onFilterChange={handleFilterChange} isVisible={true} />
                    </div>
                    <div className='content'>
                        <h1 className="text-center">Produkty</h1>
                        <div className='product-grid'>
                            {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (
                                products.map((product) => (
                                    <div key={product._id} className='product-item'>
                                        <Product product={product} />
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className='stopa'>
                <Stopa />
            </div>
            <div className='stopa2'>
               <Stopa2 />
            </div>
            
        </div>
    );
}

export default Shop;
