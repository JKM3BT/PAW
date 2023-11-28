
const Welcome = ({onButtonClick})=>{

    const welcomeStyle = {
        display: "flex",
        width: "75vw",
        height: "50vh",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#283618",
        color: "#fefae0"
    }
    return(
        <div style={welcomeStyle}>
            <h1>Welcome</h1>
            <button onClick={onButtonClick}>Start</button>
        </div>
    )
}

export default Welcome;