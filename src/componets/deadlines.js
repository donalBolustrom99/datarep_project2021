import { Component } from "react";
import DeadlineList from "./deadlinelist";
import axios from 'axios';

class Deadlines extends Component{

    constructor(){
        super();

        this.reloadPage = this.reloadPage.bind(this)
    }

    state = {
        deadlines: [ ]
    };

    //will be called when a component is in view
    componentDidMount(){
        axios.get('http://localhost:4000/deadline')
        .then((info)=>{
            this.setState({ deadlines: info.data })
        })
        .catch((error)=>{
            console.log(error)
        });
    }

    //auto reloads the page if there something new added, similar to above method but can be called whenever
    reloadPage(){
        axios.get('http://localhost:4000/deadline')
        .then((info)=>{
            this.setState({ deadlines: info.data })
        })
        .catch((error)=>{
            console.log(error)
        });
    }

    render(){
        return(
            //information send to deadlinelist and reloads the pages when there a change
            <div>
                <h1>Deadline Information Below</h1>
                <DeadlineList deadlines={this.state.deadlines} reloadPage={this.reloadPage}></DeadlineList>
            </div>
        );
    }
}

export default Deadlines;