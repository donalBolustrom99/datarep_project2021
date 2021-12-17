import { Component } from "react";
import axios from 'axios';
import React from 'react';

class Change extends Component {

    constructor(props) {
        super(props);

        //all things must be bound or you will get errors, common gotcha
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeModName = this.onChangeModName.bind(this);
        this.onChangeEndDate = this.onChangeEndDate.bind(this);
        this.onChangeEndTime = this.onChangeEndTime.bind(this);
        this.onChangeExtraText = this.onChangeExtraText.bind(this);

        this.state = {
            modName: '',
            endDate: '',
            endTime: '',
            extraText: ''
        }
    }

    componentDidMount(){
        console.log(this.props.match.params.id);

        axios.get("http://localhost:4000/deadline/"+this.props.match.params.id)
        .then((res)=>{
            this.setState({
                _id:res.data._id,
                modName:res.data.modName,
                endDate:res.data.endDate,
                endTime:res.data.endTime,
                extraText:res.data.extraText
            })
        })
        .catch((err)=>{
            console.log(err);
        });
    }

    onChangeModName(e) {
        this.setState({
            modName: e.target.value
        });
    }

    onChangeEndDate(e) {
        this.setState({
            endDate: e.target.value
        });
    }

    onChangeEndTime(e) {
        this.setState({
            endTime: e.target.value
        });
    }

    onChangeExtraText(e){
        this.setState({
            extraText: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const newDeadline = {
            modName: this.state.modName,
            endDate: this.state.endDate,
            endTime: this.state.endTime,
            extraText: this.state.extraText,
            _id:this.state._id
        }
        axios.put('http://localhost:4000/deadline/'+this.state._id, newDeadline)
        .then(response =>{
            console.log(response.data)
        })
        .catch((err)=>{
            console.log(err)
        });
    }

    render() {
        return (
            <div className='App'>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Change Module Name: </label>
                        <input type='text' className='form-control'
                            value={this.state.modName} onChange={this.onChangeModName}></input>
                    </div><br></br>
                    <div className="form-group">
                        <label>Change Deadline Date</label>
                        <input type="date" className="form-control" value={this.state.endDate}
                            onChange={this.onChangeEndDate}></input>
                    </div><br></br>
                    <div className="form-group">
                        <label>Change Deadline Time</label><br></br>
                        <input type="time" className="form-group" value={this.state.endTime}
                            onChange={this.onChangeEndTime}></input>
                    </div><br></br>
                    <div className="form-group">
                        <label>Change Any Additional Information Here</label><br></br>
                        <textarea placeholder="Enter any additional information here." value={this.state.extraText} onChange={this.onChangeExtraText} style={{width: '64rem'}}></textarea>
                    </div><br></br>
                    <div className="form-group">
                        <input type="submit" value='Change Deadline' className="btn btn-primary"></input>
                    </div>
                </form>
            </div>
        );
    }
}

export default Change;