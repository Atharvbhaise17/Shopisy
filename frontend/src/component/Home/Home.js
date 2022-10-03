import React, { Fragment, useEffect } from 'react'
import { CgMouse } from 'react-icons/cg'
import './home.css'
import Product from './ProductCard.js'
import MetaData from '../layout/MetaData'
import { getProduct } from '../../actions/productAction'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../layout/Loader/Loader'
import { useAlert } from 'react-alert'
import { clearErrors } from '../../actions/productAction'


const Home = () => {

  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector(state => state.products);

  useEffect(() => {

    if (error) {
      alert.error(error);
      dispatch(clearErrors())
    }
    dispatch(getProduct())
  }, [dispatch, error, alert])
  return (

    <Fragment>
      {loading ? (<Loader />) :
        (<Fragment>
          <MetaData title="Shopisy" />

          <div className='banner'>
            <p>Welcome to Shopisy</p>
            <h1>Find Amazing Products Below</h1>
            <a href='#container'>
              <button>
                Scroll Now <CgMouse />
              </button>
            </a>
          </div>

          <h2 className='homeHeading'>
            Featured Product
          </h2>

          <div className='container' id="container">

            {products && products.map(product => (
              <Product product={product} />
            ))}
          </div>
        </Fragment>
        )
      }

    </Fragment>
  )
}

export default Home