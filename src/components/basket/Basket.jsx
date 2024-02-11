import React from 'react'
import firstImg from './product/assets/image/products/photo.png';
import secondImg from './product/assets/image/products/orig.png';
import thirdImg from './product/assets/image/products/orig (2).png';

import './Basket.scss'
import { Product } from './product/Product'

export default function Seacrh() {
  return (
    <div>
       <li className="nav-itemmm ">
          <a className="nav-link" href="/"> Home</a>
        </li>
      <div className="container">
    <h2>
        {' '}
        <span>Популярные</span> товары
    </h2>
    <ul className="productsList">
        <Product
            title="PowerShot SX620 HS"
            model="Canon"
            img={firstImg}
        />
        <Product
            title="PowerShot SX620 HS"
            model="Canon"
            img={thirdImg}
        />
        <Product
            title="PowerShot SX620 HS"
            model="Canon"
            img={secondImg}
        />
    </ul>
</div>
    </div>
    
  )
}
