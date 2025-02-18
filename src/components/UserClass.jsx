import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo:{
                name:"Dummy",
                location : "Nashik"
            }
        }
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/sahilpate7");
        const json = await data.json();
        this.setState({
            userInfo: json,
        })
    }

    componentDidUpdate() {
        console.log('updated')
    }

    render() {
        // const {name,location} = this.props;
        const {name,location} = this.state.userInfo;
        return (
            <div>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
            </div>
        )
    }
}

export default UserClass;