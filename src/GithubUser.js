import React, {Component} from 'react';
import './GithubUser.css'

class GithubUser extends Component {
    state = {
        user: {
            avatar_url: '',
            login: '',
            followers: '',
            following: '',
            location: '',
            html_url: ''
        }
    }

    constructor(props){
        super(props);
        this.fetchUserData();
    }

    componentDidUpdate(){
        this.fetchUserData();
    }

    fetchUserData = () => {
        fetch(`https://api.github.com/users/${this.props.match.params.username}`)
            .then((response) => response.json())
            .then((userData) => this.setState({user: userData}));

        console.log("Fetched Data");
    }

    render(){
        const { user } = this.state;
        return (
            <div className="github-user">
                <img src={user.avatar_url} alt="User avatar" />
                <h2>{user.login}</h2>
                <h3>Followers: {user.followers}</h3>
                <h3>Following: {user.following}</h3>
                <h3>Location: {user.location}</h3>
                <a href={user.html_url} target="_">Link to {user.login}'s profile</a>
            </div>
        )
    }
}

export default GithubUser;