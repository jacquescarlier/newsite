import "./navLink.css"
export function NavLinks({links}) {
      return (
        <>
          <nav className="navbar">
            <div className="navbar-brand">
              <h1>4Ne1</h1>
            </div>
            <div className="navbar-links">
              {links.map(link => (
                <a key={link.id} href={link.url}>
                  {link.title}
                </a>
              ))}
            </div>
          </nav>
          
        </>
      );
}