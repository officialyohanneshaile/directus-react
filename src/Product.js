import React, {useState, useEffect} from 'react';

const Products = () =>{
    const [data, setData]=useState([]);

    const fetchData = async () => {
    const resp = await fetch("http://localhost:8055/items/product/");
    const data = await resp.json();
    setData(data);
    console.log(data)
  };
  useEffect(() => {
    fetchData();
  }, []);
    
    return(
        <div>
        <header>Product</header>
        <p>Name: </p>
        <p>Price: </p>
        </div>
        
    )
}
export default Products