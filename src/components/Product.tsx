import React, { ReactElement } from 'react'
import { ProductType } from '../context/ProductsProvider'
import { ReducerActionType, ReducerAction } from "../context/CartProvider"


type PropsType = {
  product: ProductType,
  dispatch:  React.Dispatch<ReducerAction>,
  REDUCER_ACTIONS: ReducerActionType,
  inCart: boolean
}

const Product = ({product, dispatch, REDUCER_ACTIONS, inCart}: PropsType): ReactElement => {
  
  // const img: string = new URL(`./../images/product` + product.id + ".png", import.meta.url).href
  const img: string = new URL(`${product.images[0]}`).href

  const onAddToCart = () => dispatch({type: REDUCER_ACTIONS.ADD, payload: { ...product, imageURL: product.images[0], qty: 1}})

  const itemInCart = inCart ? ' → Item in Cart: ✔️' : null

  const content = (
    <article className="product">
      <h3>{product.name}</h3>
      <img src={img} alt={product.name} className="product__img" />
      <p>{new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(product.price)}</p>
      {itemInCart}
      <button onClick={onAddToCart}>Add to Cart</button>
    </article>
  )

  return content
}

export default Product