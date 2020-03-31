// компонент управляет состоянием приложения
// хранит список товаров в атрибуте products

import React, { useState } from 'react'
import { products } from '../data/products'
import CardsView from './CardsView'
import ListView from './ListView'
import IconSwitch from './IconSwitch'

function Store() {
  const icons = ['view_module', 'view_list'];
  const viewTypes = [
    {
      type: 'cards',
      element: <CardsView products={products}/>,
    },
    {
      type: 'list',
      element: <ListView products={products}/>,
    }
  ];

  const [icon, setIcon] = useState(icons[1]);
  const [view, setView] = useState(viewTypes[0]);

  const onSwitch = () => {
    if (icon === icons[1]) {
      setIcon(icons[0]);
    } else {
      setIcon(icons[1]);
    }
    if (view.type === 'cards') {
      setView(viewTypes[1]);
    } else {
      setView(viewTypes[0]);
    }
  }

  return (
    <div className="store">
      <IconSwitch icon={icon} onSwitch={onSwitch}/>
      {view.element}
    </div>
  )
}

export default Store
