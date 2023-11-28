import { useState } from "react";

const MyDate = ()=>{
    const[currentDate] = useState(new Date())

    const myDate = currentDate.toLocaleDateString("pl-PL");
    const myTime = currentDate.toLocaleTimeString("pl-PL");
    return(
        <div>
            <p>{myDate}</p>
            <p>{myTime}</p>
        </div>
    )
}

export default MyDate;