import * as React from "react"
import { Link } from 'gatsby';

const Footerbox = {
    backgroundColor: "rgb(71, 80, 132)",
    marginLeft: "-10px",
    marginRight: "-10px",
    position: "fixed",
    bottom: "0",
    width:"100%",
    height:"40px",   
    paddingBottom: "25px",   
}

const Footerlink ={
    marginLeft:"40px",
    marginRight:"40px",
    marginTop:"20px",
    marginBottom:"20px",
    color: "white",
    cursor: "pointer",
    textDecoration: "none"
}

const Footer = () => {
    return(
        <main>
            <div style={Footerbox} className="colContainer">
                <div className="rowContainer" style={{justifyContent:"center"}}>
                    <Link to={`/imprint/`} style={Footerlink}>Impressum</Link>
                    <Link to={`/dataprotection/`} style={Footerlink}>Datenschutz</Link>
                </div>
                
            </div>

        </main>
    )
}

export default Footer