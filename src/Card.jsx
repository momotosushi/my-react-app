import profilePic from './assets/react.svg'

function Card() {
    return(
        <div className="card">
            <img src={profilePic} alt="profile pic"></img>
            <h2>Servus</h2>
            <p>tutorials and tutorials</p>
        </div>
    );
}


export default Card