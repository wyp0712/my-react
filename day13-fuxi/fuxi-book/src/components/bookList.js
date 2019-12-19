import React from 'react'

const BookList = (props) => {
    const { cartData } = props;
    return (
      <div className="book-list">
        {
          cartData.map((item, index) => {
            return (
              <ul key={item.id}>
                <li> <img  src={item.img} alt=''/> </li>
                <li> {item.name} </li>
                <li> <span className="add-btn">+</span> </li>
              </ul>
            )
          })
        }
      </div>
    )
}


export default BookList