// карточка товара для компонента CardsView

import React from 'react'
import PropTypes from 'prop-types'

function ShopCard({ name, price, color, img }) {
  const background = {
    backgroundImage: `url(${img})`,
  }
  return (
    <div className="shop-card" style={background}>
      <div className="name">{name}</div>
      <div className="color">{color}</div>
      <div className="wrapper">
        <div className="price">${price}</div>
        <button className="to-cart">Add to cart</button>
      </div>
    </div>
  )
}

ShopCard.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  color: PropTypes.string,
  img: PropTypes.string,
};

export default ShopCard

