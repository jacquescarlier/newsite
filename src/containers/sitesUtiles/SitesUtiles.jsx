import "./sitesutiles.css"

export function SitesUtiles({ datasSites }) {

    
    return (
        <>
        <h2>Sites Utiles</h2>
            <div className="utils">
                {datasSites.map((data, index) => (
                    <div className="utilsBox" key={index}>
                        <a key={data.id} href={data.url} target="_blank" rel="noopener">{data.title}
                        <p>{data.description}</p>
                        </a>
                    </div>
                ))}
            </div>

        </>
    )
}

