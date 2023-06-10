import React ,{useState , useEffect} from 'react'
import { Col, Row , Image, ListGroup, ListGroupItem} from 'react-bootstrap'
import { Link , useParams } from 'react-router-dom'
import Rating from '../Components/Rating'
import axios from 'axios'

const ProductScreen = (props) => {
  const [product, setProduct] = useState({})
  const {id} = useParams();
  console.log(id)

  useEffect( () => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`/api/products/${id}`);
        console.log(res.data);
        setProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    }
      fetchProduct();
  },[id])


  // const product = products.find( p => p._id === id )
  return (
    <>
    <Link className='btn btn-light my-3' to='/'> Go Back </Link>
    <Row>
    <Col md={6}> 
    <Image src={`${product.image}`} alt='product.name' fluid/>
    </Col>

      <Col md={3}>
        <ListGroup variant='flush'>
        <ListGroupItem>
        <h3>{product.name}</h3>
        </ListGroupItem>
        <ListGroupItem>
        <Rating value={product.rating} text= {`${product.numReviews} reviews`}></Rating>
        </ListGroupItem>
        <ListGroupItem>
        Price : ${product.price}
        </ListGroupItem>
        <ListGroupItem>
        Description : {product.description}
        </ListGroupItem>
        </ListGroup>
      </Col>

      <Col md={3}>
      
      
      
      </Col>

    </Row>
    
    </>
  )
}

export default ProductScreen
