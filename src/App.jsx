import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Intro from './components/intro/Intro'
import IntroInfo from './components/introInfo/IntroInfo'
import NewsMain from './components/news-main/NewsMain'
import Basket from './components/basket/Basket'
import { Fragment } from 'react'
import HomePage from './components/homepage/HomePage'
import Seacrh from './components/basket/Basket'
import LoginForm from './components/Login/LoginForm'

      {/* <Header />
      <Intro />
      <IntroInfo />
     <NewsMain />
     <Footer />
     <Basket /> */}
function App() {

  return (
    <>
    <Fragment >
     <Header />
     <Routes>
      <Route path='/' element={<HomePage />}/>
     <Route path='/introinfo'  element={<IntroInfo />} /> 
      <Route path='/newsmain' element={<NewsMain />} />
      <Route path='/intro' element={<Intro />} />
      <Route path='/basket' element={<Seacrh />} />
      <Route path='/login' element={<LoginForm />} />
     </Routes>
     <Footer />
    </Fragment>
 


    </>
  )
}

export default App
