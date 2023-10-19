import styles from './dataFetch.module.scss'
import { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { toggleNameActions } from '@/redux/slices/starWarsSlice';

const DataFetch = () => {
    const [name, setName] = useState()
    const [randomNumber, setRandomNumber] = useState(`1`)
    const dispatch = useDispatch()
    function NumberSetter() {
        setRandomNumber(Math.floor(Math.random() * 50) + 1);
    }
    const fetchData = async () => {
        NumberSetter()
        const response = await axios.get(`https://swapi.dev/api/people/${randomNumber}/`)
        const newName = response.data.name
        setName(newName)
        dispatch(toggleNameActions.toggleName(newName))
    }
    return (
        <button className = {styles.button} onClick = {fetchData}>Change name</button>
    )
}

export default DataFetch