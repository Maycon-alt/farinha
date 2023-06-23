import Head from "next/head"
import Slider from "./components/Slider"
import styles from '../styles/Home.module.css'
import About from "./components/About"
import Contact from "./components/Contacts"
import Services from "./components/Services"



export default function Home(){
  return (
    <div className=''>
      <Slider/>
      <About/>
      <Services/>
      <Contact/>
    </div>
  )
}
