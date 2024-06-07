export default function Api({people}){
    return(
        <section style={{marginTop:"15%",marginBottom:"23%"}}>
            <h1 style={{textAlign:"center"}}>Postać</h1>
            <ul style={{display:"table",margin:"0 auto"}}>
            {
                    people.map( item => <li key={item.name}>
                        {item.name},{" "}
                        {item.height},{" "}
                        {item.gender},{" "}
                        {item.birth_year},{" "}
                        {item.hair_color},{" "}
                        {item.skin_color},{" "}
                        {item.eye_color}</li> )
                }
            </ul>
        </section>
    )
}