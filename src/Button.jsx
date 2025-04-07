function Button() {

    const handleClick = () => console.log("Button clicked!");

    const handleClick2 = (name) => console.log(`Hello ${name} stop clicking me!`);

    let count = 0;

    const handleClick3 = (name) => {
        if(count < 3) {
            count++;
            console.log(`${name} clicked me ${count} times`);
        }
        else {
            count++;
            console.log(`${name} Stop clicking me for the ${count}th time!`);
        }
    }

    const handleClick4 = (e) => e.target.textContent = "Ouch!";

    return(
        <>
            <button onClick={() => handleClick2("John")}>
                Click me :D
            </button>
            <button onClick={() => handleClick3("John")}>
                Click me :D
            </button>
            <button onDoubleClick={(e) => handleClick4(e)}>
                Click me :D
            </button>
        </>

    );
}

export default Button