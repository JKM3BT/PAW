const characterList = (chars)=>{
    return(
        <p>{chars.map(char=>{
            return <p>{char.name}</p>
        })}</p>
    )
}
export default characterList