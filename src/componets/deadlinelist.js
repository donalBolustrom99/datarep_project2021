import { Component } from "react";
import ListItems from "./listItems";

class DeadlineList extends Component{
    render(){
        //code that grabs anything from the database and also calls for the page to reload whenever needed, sends to list items
        return this.props.deadlines.map((deadline)=>{
            return <ListItems deadline={deadline} reloadPage={this.props.reloadPage}></ListItems>
        })
    }
}

export default DeadlineList;