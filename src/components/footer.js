import * as React from "react"
import { Link } from 'gatsby';

const Footerbox = {
    backgroundColor: "rgb(71, 80, 132)",
    position: "fixed",
    bottom: "0",
    width: "100%",
    height: "40px",
    paddingBottom: "25px",
}

const Footer = () => {
    return (
        <main>
            <div style={Footerbox} className="colContainer">
                <div className="rowContainer" style={{ justifyContent: "center" }}>
                    <Link rel={`nofollow`} to={`/imprint/`} className="footerlink" >Impressum</Link>
                    <Link rel={`nofollow`} to={`/dataprotection/`} className="footerlink">Datenschutz</Link>
                    <Link rel={`nofollow`} to={`/presskit/`} className="footerlink">Über uns</Link>
                </div>

            </div>

        </main>
    )
}

export default Footer