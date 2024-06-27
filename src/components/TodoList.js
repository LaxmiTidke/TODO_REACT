//react function component export = rfce (shortcut)
import React from 'react'

function TodoList(props) {
  return (
    <li className="list-item">
        {/* Item 1 */}
        {props.item}
        <span className='icons'>
        <i className="fa-solid fa-trash-can icon-delete" 
        onClick={e=>{
            props.deleteItem(props.index)
        }}></i>
        </span>
    </li>
  )
}

export default TodoList