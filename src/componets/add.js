import { Component } from "react";
import axios from 'axios'

class Add extends Component {

    constructor() {
        super();

        //all things must be bound or you will get errors, common gotcha
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeModName = this.onChangeModName.bind(this);
        this.onChangeEndDate = this.onChangeEndDate.bind(this);
        this.onChangeEndTime = this.onChangeEndTime.bind(this);
        this.onChangeExtraText= this.onChangeExtraText.bind(this);

        //state to hold information
        this.state = {
            modName: '',
            endDate: '',
            endTime: '',
            extraText: ''
        }
    }

    //methods to grab information
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

    //information is send when user hits the form button
    onSubmit(e) {
        e.preventDefault();
        
        const newDeadline = {
            modName: this.state.modName,
            endDate: this.state.endDate,
            endTime: this.state.endTime,
            extraText: this.state.extraText
        }
        axios.post('http://localhost:4000/deadline', newDeadline)
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err)
        });
    }

    render() {
        return (
            //simple form that asks for the required information, each section activates a method (method bind
            // on top as always) and sends the information into variables(then posts to server and saved to data base)
            <div className='App'>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Module Name: </label>
                        <input type='text' className='form-control'
                            value={this.state.modName} onChange={this.onChangeModName}></input>
                        <br></br>
                    </div>
                    <div className="form-group">
                        <label>Add Deadline Date</label>
                        <input type="date" className="form-control" value={this.state.endDate}
                            onChange={this.onChangeEndDate}></input>
                        <br></br>
                    </div>
                    <div className="form-group">
                        <label>Add Deadline Time</label><br></br>
                        <input type="time" className="form-group" value={this.state.endTime}
                            onChange={this.onChangeEndTime}></input>
                        <br></br><br></br>
                    </div>
                    <div className="form-group">
                        <label>Add Any Additional Information Here</label><br></br>
                        <textarea placeholder="Enter any additional information here." value={this.state.extraText} onChange={this.onChangeExtraText} style={{width: '64rem'}}></textarea>
                    </div>
                    <div className="form-group">
                        <br></br>
                        <input type="submit" value='Add Deadline' className="btn btn-primary"></input>
                    </div>
                </form>
            </div>
        );
    }
}

export default Add;