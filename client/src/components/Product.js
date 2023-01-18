import { useState } from 'react'
import { Link } from 'react-router-dom'

const Product = ({ product, onClickHander }) => {

  const [isInCart, setIsInCart] = useState(false)

  return (
    <div style={{
      width: "150px",
      border: '1px solid black',
      display: 'flex',
      flexDirection: 'column',
      margin: '5px'
    }}>
      <h2><Link to={`/Catalog/${product.id}`} state={{ data: product }}>{product.name}</Link></h2>
      <div>{product.price}czk</div>
      <div><Link to={`/Catalog/${product.id}`}><img src={product.img} alt='' height={150} width={150} /></Link></div>
      <button onClick={() => {
        setIsInCart(true)
        onClickHander(product)
      }}>Buy</button>
      <div>{isInCart && "In cart"}</div>
    </div>
  )
}

export default Product