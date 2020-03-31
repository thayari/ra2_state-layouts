import React from 'react'
import PropTypes from 'prop-types'
import ShopCard from './ShopCard'
import shortid from 'shortid';

function CardsView({products}) {
  const cards = products.map((product) => <ShopCard key={shortid.generate()} {...product}/>);
  return (
    <div className="cards">
      {cards}
    </div>
  )
}

CardsView.propTypes = {
  products: PropTypes.array,
}

export default CardsView

