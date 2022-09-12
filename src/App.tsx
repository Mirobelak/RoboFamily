import { useState, useEffect, ChangeEvent } from 'react';
import CardList from './Components/card-list-component/CardList';
import SearchBox from './Components/search-box-component/SearchBox';
import {getData} from "./utils/fetch.data"
import "./App.css"

export type Robot = {
    id:string;
    name: string;
    email: string
}

const App = () => {

    const [searchfield, setSearchfield] = useState("")
    const [robots,setRobots] = useState<Robot[]>([])
    const [filteredRobots,setFilteredRobots] = useState(robots)
   

    useEffect(()=>{
            const fetchUsers = async () => {
             const users = await getData<Robot[]>('https://jsonplaceholder.typicode.com/users')
            setRobots(users)}
            fetchUsers()
            
         }, [])
    
    useEffect(()=>{
       const newFilteredMonsters = robots.filter( robot => {
        return robot.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase())})
        setFilteredRobots(newFilteredMonsters) },[robots, searchfield])

        const onSearchChange = (event: ChangeEvent<HTMLInputElement> ): void => {
            setSearchfield(event.target.value.toLocaleLowerCase())}
        
        return (
            <div className='App'>
            <h1 className='app-title'> Robot Family </h1>
            <SearchBox
            className='monsters-search-box'
            placeholder='search robots'
            onChangeHandler={onSearchChange}/>
            <CardList robots={filteredRobots}/>
            </div>   
    )

}
     


export default App
