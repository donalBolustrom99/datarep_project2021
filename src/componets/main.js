import { Component } from "react";
import Calendar from "react-calendar";

export class Main extends Component {
    render() {
        return (
            //main front page with all information needed to operate 
            <div >
                <h1>Hello and Welcome to my Application</h1>
                <h4>Before starting</h4><br></br>
                <h3>It is the {new Date().toLocaleDateString()}</h3>
                <h3>The time is {new Date().toLocaleTimeString()}</h3><br></br>
                <p>Keep an eye on this timer, it is important to give yourself plenty of time during
                    exam/deadline season. It is extremely easy for the time to<br></br> catch up and catch you
                    off gaurd. This application is made to make it easier to add change and remove all your
                    deadlines and to have them all In one place.<br></br>your information will be saved
                    to a database to access time and time. There is also a space to add any extra information
                    about the module <br></br>to help you remember, keep notes, or anything really it's up to you
                </p><br></br>                
                <Calendar style={{width: '64rem'}}></Calendar><br></br>
                <p>Make use of the Calendar below to make sure you have the right days in line with your dates, once again you can add the names of the days <br></br>
                in case there days where you have to work and can work during it.
                </p>
                
            </div>
        );
    }
}

export default Main;