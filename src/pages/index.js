import styles from '@/styles/Home.module.scss'
import DataDisplay from '@/components/dataDisplay/dataDisplay.component'
import DataFetch from '@/components/dataFetch/dataFetch.component'
import Link from 'next/link';

const Home = () => {
  return (
    <div className = {styles.page}>
        <div className = {styles.page__boxOne}>
          <h1 className = {styles.page__boxOne__title}>Welcome to the super useful, ground breaking, Star Wars name-changer app!</h1>
          <div className = {styles.page__boxOne__boxTwo}>
            <div className = {styles.page__boxOne__boxTwo__name}>
              <DataDisplay />
            </div>
            <div className = {styles.page__boxOne__boxTwo__button}>
              <DataFetch />
            </div>
            <Link href="./secondPage" className = {styles.page__boxOne__boxTwo__link}>Go to the other page</Link>
          </div>
        </div>
    </div>
  )
}

export default Home