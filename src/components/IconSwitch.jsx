// принимает от Store cвойства:
// - icon - название иконки, которую хотим показать. Название иконки соответствует названию класса из библиотеки material icons. В нашем случае это - либо view_list, либо view_module.
// - onSwitch() - обработчик события, который реагирует на нажатие пользователем на иконку.
// 

import React from 'react'

function IconSwitch({icon, onSwitch}) {
  return (
    <button className="button material-icons" onClick={onSwitch}>
      {icon}
    </button>
  )
}

export default IconSwitch
