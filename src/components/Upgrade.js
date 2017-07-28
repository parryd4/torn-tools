import React from 'react'

export default function Upgrade(props) {
  return (
    <div className='upgrade' >
      <span><p>{props.name}: <button name={props.name} onClick={props.decrease}>-</button>
      <input type='text' name={props.name} value={props.value} />
      <button name={props.name} onClick={props.increase}>+</button>
      </p></span>
    </div>
  )
}
