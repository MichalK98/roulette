import React, { Component } from 'react';

class Roulette extends Component {
    state = {
        roulette : {
            roulette_numbers : [14, 7, 13, 6, 12, 5, 11, 4, 10, 3, 9, 2, 8, 1, 0],
        }
    };

    init = () => {
        //console.log('init');

        let roulette_wheel = document.getElementById('roulette-wheel');
        let roulette_result = document.getElementById('roulette-result');

        this.start(roulette_wheel, roulette_result);
    }

    start = (roulette_wheel, roulette_result) => {
        //console.log('start');

        this.wheel(roulette_wheel, "rotate(6800deg)", "all ease-in-out 10s");
        setTimeout(this.spin, 8000, roulette_wheel, roulette_result);
    }

    spin = (roulette_wheel, roulette_result) => {
        //console.log('spin');

        let random_deg = Math.random() * (7560 - 7200) + 7200;

        this.wheel(roulette_wheel, "rotate(" + random_deg + "deg)", "all ease-out 15s");
        setTimeout(this.result, 15000, roulette_wheel, roulette_result, random_deg);
    }
    
    result = (roulette_wheel, roulette_result, random_deg) => {
        //console.log('result');

        let reset_deg = random_deg - 7200;
        
        let index = reset_deg / 24;

        let roulette_numbers = this.state.roulette.roulette_numbers[Math.trunc(index)];

        roulette_result.innerHTML = roulette_numbers;

        if (roulette_numbers == 0) {
            roulette_result.className = "color-green";
            // roulette eye instend of roulette resault
        } else if (roulette_numbers <= 7) {
            roulette_result.className = "color-red";
        } else {
            roulette_result.className = "color-black";
        }

        setTimeout(this.reset, 9000, roulette_wheel, roulette_result, reset_deg);
    }
    
    reset = (roulette_wheel, roulette_result, reset_deg) => {
        //console.log('reset');

        this.wheel(roulette_wheel, "rotate(" + reset_deg + "deg)", "all ease-in-out 0s");
        setTimeout(this.start, 4000, roulette_wheel, roulette_result);
    }

    wheel = (roulette_wheel, rotation, animation) => {
        //console.log('wheel');

        roulette_wheel.style.transform = rotation;
        roulette_wheel.style.transition = animation;
    }

    render() {
        return (
            <div className="roulette">
                <div className="roulette-shadow"></div>
                <div className="roulette-arrow"></div>
                <div className="roulette-eye"><span id="roulette-result">0</span></div>
                <div className="roulette-wheel" id="roulette-wheel"></div>
                <button onClick={this.init}>Start</button>
            </div>
        )
    }
}
export default Roulette;