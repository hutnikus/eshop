import { useState } from 'react'

const Product = ({product, onClickHander}) => {

  const[isInCart, setIsInCart] = useState(false)

  return (
    <div style={{
      width: "150px",
      border: '1px solid black',
      display: 'flex',
      flexDirection: 'column',
      margin: '5px'
    }}>
      <h2>{product.name}</h2>
      <div>{product.price}czk</div>
      <div><img src={product.img} alt='' height={150} width={150} /></div>     
      <button onClick={() => {
        setIsInCart(true)
        onClickHander(product)}}>Buy</button>
        <div>{isInCart && "In cart"}</div>
    </div>
  )
}

export default Product