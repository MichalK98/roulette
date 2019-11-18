import React, { Component } from 'react';

class Roulette extends Component {
    state = {
        roulette : {
            roulette_numbers : [0, 1, 8, 2, 9, 3, 10, 4, 11, 5, 12, 6, 13, 7, 14],
            // 0: green, 1-7: red, 8-14: black
        }
    };

    init = () => {
        console.log('init');

        let roulette_wheel = document.getElementById('roulette-wheel');

        this.start(roulette_wheel);
    }

    start = (roulette_wheel) => {
        console.log('start');

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

        let roulette_numbers = this.state.roulette.roulette_numbers;

        console.log(roulette_numbers);


        let min = roulette_numbers[0];
        console.log(min);

        if ((min <= reset_deg) && (reset_deg <= max)) {
            console.log('yes');
        }

        setTimeout(this.reset, 9000, roulette_wheel, reset_deg);
    }
    
    reset = (roulette_wheel, reset_deg) => {
        console.log('reset');

        this.wheel(roulette_wheel, "rotate(" + reset_deg + "deg)", "all ease-in-out 0s");
        setTimeout(this.start, 4000, roulette_wheel);
    }

    wheel = (roulette_wheel, rotation, animation) => {
        console.log('wheel');

        roulette_wheel.style.transform = rotation;
        roulette_wheel.style.transition = animation;

        console.log(rotation, animation);
    }

    render() {
        return (
            <div className="roulette">
                <div className="roulette-shadow"></div>
                <div className="roulette-arrow"></div>
                <div className="roulette-eye"><span className="roulette-text">2</span></div>
                <div className="roulette-wheel" id="roulette-wheel"></div>
                <button onClick={this.init}>Start</button>
            </div>
        )
    }
}
export default Roulette;