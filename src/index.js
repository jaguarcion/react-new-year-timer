import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Timer extends React.Component{
    constructor(props) {
        super(props);
        const newYear = Date.parse("2021-12-31");
        const toDay = Date.now();
        const totalSeconds = (newYear - toDay) / 1000;
        let seconds = Math.floor(totalSeconds % 60);
        let minutes = Math.floor((totalSeconds / 60) % 60);
        let hours = Math.floor((totalSeconds / 3600) % 24);
        let days = Math.floor(totalSeconds / 3600 / 24);

        this.state = {
            seconds: seconds,
            minutes: minutes,
            hours: hours,
            days: days,
        };
    }

    render() {
        return(
            <div className="timer-container">
                <div className="time-block">
                    <div className="time-block__time">
                        {this.state.days}
                    </div>
                    <div className="time-block__title">
                        Days
                    </div>
                </div>
                <div className="time-block">
                    <div className="time-block__time">
                        {this.state.hours}
                    </div>
                    <div className="time-block__title">
                        Hours
                    </div>
                </div>
                <div className="time-block">
                    <div className="time-block__time">
                        {this.state.minutes}
                    </div>
                    <div className="time-block__title">
                        Minutes
                    </div>
                </div>
                <div className="time-block">
                    <div className="time-block__time">
                        {this.state.seconds}
                    </div>
                    <div className="time-block__title">
                        Seconds
                    </div>
                </div>
            </div>
        );
    }

    startInterval(){

        let delay = 1000;
        this.intervalID = setInterval(()=>{
            let newSeconds = this.state.seconds - 1;
           this.setState({seconds: newSeconds});
            if (this.state.seconds === 0){
                this.setState({
                    seconds: 60,
                    minutes: this.state.minutes -1
                });
            }
            if (this.state.minutes === 0){
                this.setState({
                    minutes: 60,
                    hours: this.state.hours -1
                });
            }
            if (this.state.hours === 0){
                this.setState({
                    hours: 24,
                    days: this.state.days -1
                });
            }
        },delay);
    }

    componentDidMount() {
        this.startInterval();
    }
};

ReactDOM.render(<Timer />,document.getElementById("root"));