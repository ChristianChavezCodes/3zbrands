import styles from '@/pageLayouts/secondPage.module.scss'
import DataDisplay from '@/components/dataDisplay/dataDisplay.component'
import Link from 'next/link';
import {useState} from 'react'

const Second = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSuperSecretButton = () =>{
    setIsSubmitted(true)
  }
  return (
    <div className = {styles.page}>
        <div className = {styles.page__boxOne}>
          <div className = {` ${styles.page__boxOne__boxTwo} ${isSubmitted? styles.colorPulsate : ''}`}>
            <div className = {styles.page__boxOne__boxTwo__name}>
              {isSubmitted? null: <DataDisplay />}
            </div>
            <div className = {styles.page__boxOne__boxTwo__superSecretMessage}>
              {isSubmitted? <h1>Thank you very much for taking the time to look at this project! It covers react fundamentals</h1>: null}
            </div>
            {isSubmitted? null :<button className = {styles.page__boxOne__boxTwo__button} onClick = {handleSuperSecretButton}>Secret button... you have been warned</button>}
            <Link href="/" className = {styles.page__boxOne__boxTwo__link}>Go back</Link>
          </div>
        </div>
    </div>
  )
}

export default Second