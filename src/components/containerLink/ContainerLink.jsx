export function ContainerLink({ links}) {

    return (
        <>
            <div className="links">
                {links.map((link, index) => (
                    <div className="linkBox" key={index}>
                        <a key={link.id} href={link.url} target="_blank" rel="noopener">{link.title}
                        </a>
                    </div>
                ))}
            </div>
        </>
    )
}