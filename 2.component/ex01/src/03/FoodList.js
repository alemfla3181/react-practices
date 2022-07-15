import React from 'react';

function FoodList({foods}) {
  return (
    <div>
      <ul>
        {this.props.foods.map((food) => {
          <FoodListItem
          key={food.no}
          name={food.name}
          quantity={food.quantity} />})}
      </ul>      
    </div>
  )
}

export default FoodList;