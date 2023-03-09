import React from 'react';
import { Fragment, useEffect } from 'react';
import "./Home.css";
import  walkingWoman  from "../../../src/images/walking woman.svg";
import ProductCard from "./ProductCard";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";



const Home = () => {

  const alert = useAlert()

  const dispatch = useDispatch();

  const { loading, error, products } = useSelector(state=>state.products)

  useEffect(() => {
    if(error){
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);  

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="GoodWire" />       
  
          <div className="Content">
              <div className="left stack-top">
                 <h1>GoodWire</h1>
                 <p>Goods services for women by women</p>
      
                 <a href="#container">
                  <button>SCROLL</button>
                 </a>
              </div>
  
              <div className="right">
                <img src={walkingWoman} alt="walking woman" />
              </div> 
          </div>

          <h3 className="homeHeading">Featured Products</h3>

          <div className="container" id="container">
            { products && products.map(product => (
              <ProductCard product={product} />
            ))}
          </div>

        </Fragment>
      )}
    </Fragment>
    
  )
}

export default Home;