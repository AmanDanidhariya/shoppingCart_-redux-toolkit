import {useDispatch, useSelector} from 'react-redux';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { remove } from '../store/CartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector(state=>state.cart);

  const removeItem = (id) =>{
    //dispatch  a remove action to remove item from cart
    dispatch(remove(id));
  }
  
  return (
    <>
    <h3>Cart</h3>
    <div className="row">
        {products.map(product => {
          return (
            <div className="col-md-4 my-2 d-flex justify-content-center" key={product.id}>
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
                <Button variant="danger" onClick={()=>{removeItem(product.id)}}>Remove Item</Button>
                </Card.Footer>
              </Card>
            </div>
          );
        })}
      </div>
    </>
    
    
  )
}

export default Cart