// карточка товара для компонента ListView

import React from 'react'
import PropTypes from 'prop-types'

function ShopItem({ name, price, color, img }) {
  const background = {
    backgroundImage: `url(${img})`,
  }
  return (
    <div className="shop-item">
      <div className="image" style={background}></div>
      <div className="name">{name}</div>
      <div className="color">{color}</div>
      <div className="price">${price}</div>
      <button className="to-cart">Add to cart</button>
    </div>
  )
}

ShopItem.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  color: PropTypes.string,
  img: PropTypes.string,
}

export default ShopItem

