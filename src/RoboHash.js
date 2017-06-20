import React, {Component} from 'react';
import './RoboHash.css';

class RoboHash extends Component{
    state = {
        roboImg: "https://robohash.org/a.png?size=400x400"
    }

    generateRobot = (ev) => {
        ev.preventDefault();
        const roboName = ev.currentTarget.roboName.value;
        this.setState({
            roboImg: `https://robohash.org/${roboName}.png?size=400x400`
        });
    }

    render(){
        return(
            <div className="robohash">
                <img src={this.state.roboImg} alt="robot"/>
                <form onSubmit={this.generateRobot}>
                    <input type="text" name="roboName" value={this.state.robotName} placeholder="Just type ya silly"></input>
                    <button type="submit">WHERE'S MY ROBOT?!</button>
                </form>
            </div>
        )
    }
}

export default RoboHash;