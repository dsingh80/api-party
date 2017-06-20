import React, {Component} from 'react';
import './Github.css'
import { Route } from 'react-router-dom';
import GithubUser from './GithubUser.js';

class Github extends Component{
    state = {
        username: '',

    }

    handleChanges = (ev) => {
        const username = ev.currentTarget.value;
        this.setState({username});
    }

    handleSubmit = (ev) => {
        ev.preventDefault();
        this.props.history.push(`/github/${this.state.username}`);
    }

    render(){
        return(
            <div className="github">
                <img src="http://www.aha.io/assets/github.7433692cabbfa132f34adb034e7909fa.png" alt="github logo" className="github-logo" />
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input 
                            type="text"
                            placeholder="username"
                            value={this.state.username}
                            onChange={this.handleChanges}
                        ></input>
                    </div>
                    <div>
                        <button type="submit">Lookup Github user</button>
                    </div>
                </form>

                <Route exact path="/github" render={()=><p>Please enter a Github username</p>} />
                <Route path="/github/:username" component={GithubUser} />
            </div>
        )
    }
}

export default Github;