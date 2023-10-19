import { useSelector} from 'react-redux';

const DataDisplay = () => {
    const currentStateName = useSelector((state) => state.toggleNameSlice.name)
    return (
        <h1>{currentStateName}</h1>
    )
}

export default DataDisplay