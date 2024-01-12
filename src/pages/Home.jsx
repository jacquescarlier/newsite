import { NavLinks } from "../components/navLink/NavLinks"
import { SitesUtiles } from '../containers/sitesUtiles/SitesUtiles'
import { ContainerLink } from "../components/containerLink/ContainerLink"
import { Moteurs } from "../components/moteursDeRecherche/Motor"
import datasSites from '../data/sitesUtiles.json'
import links from '../data/nav.json'
import linksLinux from '../data/linux.json'
import linksImages from '../data/image.json'
import linksHtml from '../data/htmlcss.json'
import motors from '../data/moteurs.json'
import "./home.css"

export function Home() {
    const title = linksLinux[0].title
    console.log("title", title)
    return (
        <div className="container-home">
            <NavLinks links={links} />
            <div className="linksSites">
                <ContainerLink classsName="linux" links={linksLinux} />
                <ContainerLink className="images" links={linksImages} />
                <ContainerLink className="htmlcss" links={linksHtml} />
            </div>
            <SitesUtiles datasSites={datasSites} />
            <Moteurs links={motors} />
        </div>
    )
}
