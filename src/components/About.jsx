import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";
import UserContext from "../utils/UserContext";

// class based component
class About extends Component {
    constructor(props) {
        super(props);

        console.log('parent constructor');
    }
    render() {

        console.log("parent render");

        return (
            <div>
                <h1>About</h1>
                <div>
                    <UserContext.Consumer>
                        {({loggedInUser}) => <h2>{loggedInUser}</h2>}
                    </UserContext.Consumer>
                </div>
                <User name={"function"}/>
                <UserClass name={"Sahil"} location={"Nashik"} />
            </div>
        )
    }
}

// functional component
// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <User name={"Sahil"}/>
//             <UserClass name={"Sahil (class)"} location={"Nashik"} />
//         </div>
//     )
// };

export default About;