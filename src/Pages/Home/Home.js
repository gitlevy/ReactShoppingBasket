import React from 'react'
import './Home.css'
import imgHomeShop from './shopimg.jpg'


export default function Home() {
  return (
    <div className="global-container">
       <h1 className="home-title">
         Bienvenue au <span>Shop</span>
         </h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores minus ab dolorum praesentium numquam reprehenderit minima alias quibusdam distinctio quae, quaerat libero nemo doloremque ipsum ratione aut quis omnis magni!</p>

         <img src={imgHomeShop} alt="Accueil shop" />
    </div>
  )
}
