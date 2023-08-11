import React from 'react'
import { Header } from './Components/Header'
import { Footer } from './Components/Footer'
import Test from './Components/Childerns/Test'
import styles from './css/style.module.css'
import './css/data.css'
export const App = () => {
  return (
    <div>
      <Header/>
      <Footer/>
      <h1 className={styles.header}>Taha</h1>
      <Test/>
    </div>
  )
}
export default App