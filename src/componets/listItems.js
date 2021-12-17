import { Component } from "react";
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from "axios";

class ListItems extends Component {

    constructor() {
        super();

        //important to bind every single new method made
        this.deleteDeadline = this.deleteDeadline.bind(this);
    }

    //delete code, calls to server.js and makes use of axios
    deleteDeadline(e) {
        e.preventDefault();
        console.log("Delete: " + this.props.deadline._id);

        axios.delete("http://localhost:4000/deadline/" + this.props.deadline._id)
            .then(() => {
                this.props.reloadPage();
            })
            .catch();
    }

    render() {
        return (
            //card looped through to get the desired look, will react infinite times if needed
            <div align="center">
                <Card style={{width: '64rem'}} border="success"
                >
                    <Card.Header as="h5">{this.props.deadline.modName}</Card.Header>
                    <Card.Body>
                        <Card.Title>{this.props.deadline.endDate} at {this.props.deadline.endTime}</Card.Title>
                        <Card.Text>
                            {this.props.deadline.extraText}
                        </Card.Text>
                        <Link to={"/change/" + this.props.deadline._id} className="btn btn-primary">Edit</Link>
                        <Button onClick={this.deleteDeadline} variant="danger">Delete</Button>
                    </Card.Body>
                </Card>
                <br></br>
            </div>
        );
    }
}

export default ListItems;