import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <h2>This is Namaste React Web Series</h2>
            <User name={"Omar Sall (function)"}/>
            <UserClass name={"Omar Sall (class)"}/>
        </div>
    );
};
export default About;