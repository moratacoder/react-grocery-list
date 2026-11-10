import React from 'react'

const LineItem = ({ item, handleCheck,handleDelete }) => {
  return (
   <li className='item' key={item.id}>
             <input 
                type='checkbox'
                onChange={() =>handleCheck(item.id)}
                checked={item.checked}
                />
                <label 
                style={(item.checked) ? { textDecoration:'line-through'} : null}
                onDoubleClick={() =>handleCheck(item.id)}>
                  {item.item}</label>
                <button onClick={() =>handleDelete(item.id)} aria-label={`Delete${item.item}`}
                    tabIndex="0">
                    Delete </button>
                {/* <FaTrashAlt
                   role="button"
                   tabIndex="0"
                 />   */}
          </li>
  )
}

export default LineItem
