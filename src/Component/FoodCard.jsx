import React from 'react';

const FoodCard = ({item}) => {
    const {name, image, price, recipe} = item;
   
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={image}
      alt="Shoes" />
  </figure>
  <p className='absolute bg-slate-900 rounded-lg right-0 text-white mr-4 mt-4 px-4'>${price}</p>
  <div className="card-body">
    <h2 className="card-title flex flex-col items-center ">{name}</h2>
    <p className='text-center'>{recipe}</p>
    <div className="card-actions justify-center">
      <button className="btn btn-outline bg-slate-100 border-orange-600 border-0 border-b-4 mt-4">order Now</button>
    </div>
  </div>
</div>
    );
};

export default FoodCard;