function Movies({listaFilmow}){
    return (
        <>
            <h1>Lista próbna</h1>
            <ul>
                {
                    listaFilmow.map( item => <li key={item.episode_id}> {item.title}, {item.opening_crawl}</li> )
                }
            </ul>
        </>
    )
}

export default Movies;