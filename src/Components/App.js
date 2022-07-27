import React, { Component } from 'react';
import CardList from '../Components/CardList';
import  {robots}  from '../robots'
import SearchBox from '../Components/SearchBox';


class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: "" 
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => {this.setState({robots: users})})
    }

    onSearchChange = (e) => {
        this.setState({searchfield: e.target.value})
    }

    render() {
        const filteredRobots = this.state.robots.filter( robot => {
            return robot.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase())})
            
            if(this.state.robots.length === 0){
                return <h1>LOADING...</h1>
                }
            else { return (
                <div className='text-center'>
                <h1>ROBO FAMILY</h1>
                <SearchBox searchchange = {this.onSearchChange}/>
                <CardList robots={filteredRobots}/>
            </div>)
            }
       
    }
}

export default App;



