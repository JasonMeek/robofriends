import React, {Component} from "react";
import Cardlist from "./Cardlist";
import Searchbox from "./Searchbox";
import Scroll from "./Scroll";
import "./App.css";

class App extends Component{
    constructor(){
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => this.setState({robots: users}));
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => { //Filtered robots is an array
            return robot.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase());
        })
        return(
            <div className="tc">
                <h1 className="f1">Robofriends</h1>
                <Searchbox searchChange = {this.onSearchChange}/>
                <Scroll>
                    <Cardlist robots={filteredRobots}/>
                </Scroll>
            </div>
        );
    }
}

export default App;