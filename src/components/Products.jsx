  import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux"; 
import {add} from '../store/CartSlice'

const Products = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => setProducts(result));
  }, []);

  const addToCart = (product) => {
    //dispatch a add action pass the payload which is product
      dispatch(add(product));
  }

  return (
    <>
      <h1>Products dashboard</h1>
      <div className="row">
        {products.map(product => {
          return (
            <div className="col-md-3 mb-2" key={product.id}>
              <Card style={{ width: "18rem" }} className="h-100">
                <div className="text-center">
                  <Card.Img
                    variant="top"
                    src={product.image}
                    style={{ width: "100px", height: "130px" }}
                  />
                </div>

                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>INR.{product.price}</Card.Text>
                </Card.Body>
                <Card.Footer style={{backgroundColor: 'white'}}>
                <Button variant="primary" onClick={()=>addToCart(product)}>Add to cart</Button>
                </Card.Footer>
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;
