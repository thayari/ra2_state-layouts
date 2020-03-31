import React from 'react'
import PropTypes from 'prop-types'
import ShopItem from './ShopItem'
import shortid from 'shortid';

function ListView({products}) {
  const items = products.map((product) => <ShopItem key={shortid.generate()} {...product}/>);
  return (
    <div className="list">
      {items}
    </div>
  )
}

ListView.propTypes = {
  products: PropTypes.array,
}

export default ListView

