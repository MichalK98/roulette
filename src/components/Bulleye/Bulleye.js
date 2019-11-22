import React, { Component } from 'react';

class Roulette extends Component {
    render() {
        return (
            <div id="roulette-eye" className={this.props.bulleye.roulette_color}>
                <span id="roulette-result">{this.props.bulleye.roulette_number}</span>
            </div>
        )
    }
}
export default Roulette;