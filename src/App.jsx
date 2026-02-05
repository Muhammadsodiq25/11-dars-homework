import { Route,  Routes } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Home from "./pages/home/Home"
import Fitness from "./pages/fitness/Fitness"
import Master from "./pages/master/Master"
import Membership from "./pages/membership/Membership"
import Gym from "./pages/gym/Gym"
import gymProductImg from "./assets/gym-product-img.jpg"

const gym__products = [
  {
    img: gymProductImg,
    title: '100% WHEY PROTEIN',
    prise: '$24'
  },
    {
    img: gymProductImg,
    title: 'WHEY+',
    prise: '$24'
  },
    {
    img: gymProductImg,
    title: 'ELITE CASEIN',
    prise: '$24'
  },
    {
    img: gymProductImg,
    title: 'COMPLETE PROTEIN',
    prise: '$24'
  },
    {
    img: gymProductImg,
    title: 'COMBAT PROTEIN',
    prise: '$24'
  },
    {
    img: gymProductImg,
    title: 'WHEY ',
    prise: '$24'
  },
]

import footerLogo from "./assets/footer-logo.png"

const footer__cont = [
  {
    title:  'Info',
    links: ['About us','For customers','Contacts']
  },
    {
    title:  'Contact us',
    links: ['+1 980 971-24-19 us','hello@logoipsum.com',]
  },
    {
    title:  'Find us',
    links: ['1901 Thornridge Cir. Shiloh, Hawaii 81063']
  },
]

const App = () => {
  return (
    <div style={{alignItems:"center", padding:'10px 50px', margin:'0 auto'}}>
      <Header login={"Log In"}/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/practice" element={<Fitness/>} />
        <Route path="/gym-master" element={<Master/>} />
        <Route path="/membership" element={<Membership/>} />
        <Route path="/products" element={<Gym cont={gym__products}/>} />
      </Routes>
      <Footer logo={footerLogo} cont={footer__cont}/>
    </div>
  )
}

export default App
