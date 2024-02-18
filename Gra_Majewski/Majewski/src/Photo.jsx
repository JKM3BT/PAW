import './App.css'
function Photo(props){
    if (props.counter == 0 || props.counter >=6){
        return(<img style={{visibility:'hidden',width:'329px',height:'200px'}}/>);
    } else {
        return(
            <span>
                <img src={`images/pytanie${props.counter}.jpg`}/>
            </span>
        );
    }
}
export default Photo;