import React, {useState , useEffect} from 'react'
import {Row , Col} from 'react-bootstrap'
import Product from '../Components/Products'
import axios from 'axios'


const HomeScreen = () => {
  const [products, setProducts] = useState([])
  
  useEffect( () => {
    const fetchProducts = async () => {
      const res = await axios.get('/api/products');
      console.log(res.data)
      setProducts(res.data)
    }
    fetchProducts()
  }, [])

  return (

    <>
    <h1>Latest Products</h1>

    <Row>
    {products.map( product => (
        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
         <Product  product = {product}/>
         </Col>
    ))}
    </Row>
      
    </>
  )
}

export default HomeScreen
