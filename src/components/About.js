import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component{
    constructor(props){
        super(props);
        console.log("Parent Constructor");
    }

    componentDidMount(){
        console.log("Parent Component Did Mount");
    }

    render(){
        console.log('Parent Render');
        return(
            <div>
                <h1>About</h1>
                <h2>This is Namaste React Web Series</h2>
                <div>
                    LoggedIn User
                    <UserContext.Consumer>
                        {({loggedInUser}) => (
                            <h1>{loggedInUser}</h1>
                        )}
                    </UserContext.Consumer>
                </div>
                <User name={"Omar Sall (function)"}/>
                <UserClass name={"Omar Sall (class)"}/>
            </div>
        );
    }
}
export default About;