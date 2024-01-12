export function Moteurs({ links}) {

    return (
        <>
            <div className="motors">
                {links.map((link, index) => (
                    <div className="motorBox" key={index}>
                        <a key={link.id} href={link.url} target="_blank" rel="noopener">{link.title}
                        </a>
                    </div>
                ))}
            </div>
        </>
    )
}