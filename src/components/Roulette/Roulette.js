import React, { Component } from 'react';
import Bulleye from '../Bulleye';

class Roulette extends Component {
    state = {
        roulette : {
            roulette_numbers : [14, 7, 13, 6, 12, 5, 11, 4, 10, 3, 9, 2, 8, 1, 0],
        },
        roulette_number : 0,
        roulette_color : 'color-green',
        // Move to props and dispatch action
    };


    // Fixa bilden ej centrerad snurtrar snett
    //------------------------
    // IDIOT KOMPONENTER ENDAST SKRIVA UT DATA!
    // INGA UTRÄKNINGAR OSV
    // tips kolla chat appen
    //------------------------

    init = () => {
        let roulette_wheel = document.getElementById('roulette-wheel');
        let roulette_result = document.getElementById('roulette-result');

        this.start(roulette_wheel, roulette_result);
    }

    start = (roulette_wheel, roulette_result) => {
        this.wheel(roulette_wheel, "rotate(6800deg)", "all ease-in-out 10s");
        setTimeout(this.spin, 8000, roulette_wheel, roulette_result);
    }

    spin = (roulette_wheel, roulette_result) => {
        let random_deg = Math.random() * (7560 - 7200) + 7200;

        this.wheel(roulette_wheel, "rotate(" + random_deg + "deg)", "all ease-out 15s");
        setTimeout(this.result, 15000, roulette_wheel, roulette_result, random_deg);
    }
    
    result = (roulette_wheel, roulette_result, random_deg) => {
        let reset_deg = random_deg - 7200;
        
        let index = reset_deg / 24;

        let roulette_number = this.state.roulette.roulette_numbers[Math.trunc(index)];
        
        if (roulette_number == 0) {
            this.setState({roulette_color: 'color-green'});
        } else if (roulette_number <= 7) {
            this.setState({roulette_color: 'color-red'});
        } else {
            this.setState({roulette_color: 'color-black'});
        }
        this.setState({roulette_number: roulette_number});

        setTimeout(this.reset, 9000, roulette_wheel, roulette_result, reset_deg);
    }
    
    reset = (roulette_wheel, roulette_result, reset_deg) => {
        this.wheel(roulette_wheel, "rotate(" + reset_deg + "deg)", "all ease-in-out 0s");
        setTimeout(this.start, 4000, roulette_wheel, roulette_result);
    }

    wheel = (roulette_wheel, rotation, animation) => {
        roulette_wheel.style.transform = rotation;
        roulette_wheel.style.transition = animation;
    }

    render() {
        return (
            <div className="roulette">
                <div className="roulette-shadow"></div>
                <div className="roulette-arrow"></div>
                <Bulleye bulleye={this.state}/>
                <div className="roulette-wheel" id="roulette-wheel"></div>
                <button onClick={this.init}>Start</button>
            </div>
        )
    }
}
export default Roulette;