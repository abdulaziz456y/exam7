import React from 'react'
import Intro from '../intro/Intro'
import IntroInfo from '../introInfo/IntroInfo'
import NewsMain from '../news-main/NewsMain'
import ProductList from '../productlist/Productlist'

export default function HomePage() {
  return (
    <div>
      <Intro />
      <IntroInfo />
      <ProductList />
      <NewsMain />
    </div>
  )
}
