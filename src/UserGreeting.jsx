import PropTypes from "prop-types";

function UserGreeting({isLoggedIn=false, username="Guest"}) {

    const welcomeMsg = <h2> Welcome {username} </h2>

    const loginPrompt = <h2>Pls log in</h2>

    return(isLoggedIn ? welcomeMsg : loginPrompt);
}
UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}


export default UserGreeting