import React from 'react'
import Receiving from './Receiving'
import ProductDetails from './Components/ProductDetails'

const PropsDealing = () => {
    let name="Ayush"

    let obj={
        name:"Iphone 17",
        price:70000,
        rating:5
    }
    let obj1={
        name:"Iphone 16",
        price:60000,
        rating:5
    }
    let obj2={
        name:"Iphone 15",
        price:50000,
        rating:5
    }
    let obj3={
        name:"Iphone 14",
        price:45000,
        rating:5
    }
  return (
    <div>
      
    {/* What is Props?
        Props means sending data from parent to child
    */}

    {/* <Receiving name={name}/> */}
    <ProductDetails name={obj.name} price={obj.price} rating={obj.rating}/>
    <ProductDetails name={obj1.name} price={obj1.price} rating={obj1.rating}/>
    <ProductDetails name={obj2.name} price={obj2.price} rating={obj2.rating}/>
    <ProductDetails name={obj3.name} price={obj3.price} rating={obj3.rating}/>

    </div>
  )
}

export default PropsDealing
