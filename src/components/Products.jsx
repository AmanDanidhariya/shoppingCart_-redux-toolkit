import {useState, useEffect} from 'react';


const Products = () => {
  const [products, setProducts]  = useState([]);

  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then(data=> data.json())
    .then(result => setProducts(result))
  },[])
  console.log(products)
  return (
    <>
        <h1>Products dashboard</h1>
        {JSON.stringify(products)}
    </>
  )
}

export default Products