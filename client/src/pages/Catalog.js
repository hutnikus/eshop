import { useState } from 'react';
import Product from '../components/Product';

function Catalog() {

  const [cart, setCart] = useState([])


  const handler = (product) => {
    const newCart = [...cart];
    console.log(product)
    newCart.push(product)
    console.log(newCart)
    setCart(newCart)
  }

  const data = [
    {
      id: 1,
      name: "dogo",
      price: 5,
      img: 'img/cat.jpg'
    },
    {
      id: 2,
      name: "pes",
      price: 10,
      img: '/img/dog.jpg'
    },
    {
      id: 3,
      name: "Volaco",
      price: 120,
      img: '/img/mushroom.jpg'
    },
    {
      id: 4,
      name: "pes",
      price: 10,
      img: '/img/dog.jpg'
    },
    {
      id: 5,
      name: "pes",
      price: 10,
      img: '/img/dog.jpg'
    },
    {
      id: 6,
      name: "Volaco",
      price: 120,
      img: '/img/mushroom.jpg'
    }
  ]



  return (
    <div>
      <div>Items in Cart: {cart.length}</div>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        margin: '5px'
      }}>
        {data.map(item => <Product key={item.id} product={item} onClickHander={handler} />)}
      </div>
    </div>
  );
}

export default Catalog;
