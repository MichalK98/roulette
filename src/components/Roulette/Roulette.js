import React, { Component } from 'react';

class Roulette extends Component {

    wheel = (roulette_wheel, rotation, animation) => {
        console.log('wheel');
        roulette_wheel.style.transform = rotation;
        roulette_wheel.style.transition = animation;
        console.log(rotation, animation);
    }

    start = () => {
        console.log('start');

        let roulette_wheel = document.getElementById('roulette-wheel');

        this.wheel(roulette_wheel, "rotate(6800deg)", "all ease-in-out 10s");
        setTimeout(this.spin, 8000, roulette_wheel);
    }
    
    spin = (roulette_wheel) => {
        console.log('spin');

        let random_deg = Math.random() * (7560 - 7200) + 7200;

        this.wheel(roulette_wheel, "rotate(" + random_deg + "deg)", "all ease-out 15s");
        setTimeout(this.result, 15000, roulette_wheel, random_deg);
    }
    
    result = (roulette_wheel, random_deg) => {
        console.log('result');
        let reset_deg = random_deg - 7200;

        setTimeout(this.reset, 9000, roulette_wheel, random_deg, reset_deg);
    }
    
    reset = (roulette_wheel, random_deg, reset_deg) => {
        console.log('reset');

        this.wheel(roulette_wheel, "rotate(" + reset_deg + "deg)", "all ease-in-out 0s");
        setTimeout(this.start, 4000);
    }

    render() {
        return (
            <div className="roulette">
                <div className="roulette-shadow"></div>
                <div className="roulette-arrow"></div>
                <div className="roulette-wheel" id="roulette-wheel"></div>
                <button onClick={this.start}>Start</button>
            </div>
        )
    }
}
export default Roulette;