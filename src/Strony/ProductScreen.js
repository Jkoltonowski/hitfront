import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Rating from '../compo/Rating/Rating';
import Loader from '../compo/Loader/Loader';
import Message from '../compo/Message/Message';
import { useDispatch, useSelector } from 'react-redux';
import { listProductDetails, listProducts } from '../actions/productAction';
import './cssy/productScreen.css';
import Navbar2 from '../compo/navbar2/Navbar2';
import Filters from '../compo/Filters/Filters';
import Product from '../compo/Product/Product';
import Stopa2 from '../compo/stopa2/Stopa2';
import Stopa from '../compo/stopa/Stopa';

function ProductScreen() {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const productList = useSelector((state) => state.productList);
  const { products } = productList;
  const { loading, error, product } = productDetails;
  const navigate = useNavigate();
  const params = useParams();
  const productId = params.id;
  const [currentCategory, setCurrentCategory] = useState('');

  useEffect(() => {
    dispatch(listProductDetails(productId));
  }, [dispatch, productId]);

  useEffect(() => {
    if (product) {
      setCurrentCategory(product.category);
      dispatch(listProducts({ category: product.category }));
    }
  }, [dispatch, product]);

  const addToCartHandler = () => {
    navigate(`/cart/${productId}?qty=${qty}`);
  };

  const handleFilterChange = (newFilters) => {
    // Możesz zaimplementować dodatkową logikę, jeśli jest potrzebna
  };

  return (
    <div>
      <Navbar2 />
      <div className="product-screen">
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <>
            <div className="product-details">
              <div className="product-image">
                <img src={product.image} alt={product.name} className="product-img" />
              </div>
              <div className="product-description">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price"> {product.price} PLN</p>
                <p> {product.description}</p>
              </div>
            </div>
            <div className="product-action">
              <p className="product-status">
                Status: {product.countInStock > 0 ? 'Na stanie' : 'Wyprzedane'}
              </p>
              {product.countInStock > 0 && (
                <div className="product-quantity">
                  <label className="quantity-label" htmlFor="qty">
                    Ilość:  
                  </label>
                  <select
                    id="qty"
                    value={qty}
                    onChange={(e) => setQty(e.target.value)}
                    className="product-quantity-select"
                  >
                    {[...Array(product.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                </div>
              )}
              <button
                className="product-add-to-cart-button"
                disabled={product.countInStock === 0}
                onClick={addToCartHandler}
              >
                Dodaj do koszyka
              </button>
              <Link to="/sklep" className="go-back-link">
                Wróć do sklepu
              </Link>
            </div>
          </>
        )}
      </div>
      <div className='SameCategory'>
      <h2>Tej samej kategorii</h2>
        <div className='horizontal-scroll'>
          <Filters onFilterChange={handleFilterChange} isVisible={false} />
          {products && products.map((product) => (
            <div key={product._id} className='horizontal-item'>
              <Product product={product} />
            </div>
          ))}
        </div>
      </div>
      <div className='stopa'>
				    <Stopa />
      </div>
      <div className='mapa'></div>
      <div className='stopa2'>
           <Stopa2 />
      </div>
    </div>
  );
}

export default ProductScreen;
