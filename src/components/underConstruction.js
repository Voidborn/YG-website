import * as React from "react"
import constructionCats from "../images/buildingCrop.png"
import logoImg from "../images/EmblemWhite.svg"
import sloganImg from "../images/TextWhite.svg"
import facebookImg from "../images/socialmedia/icons8-facebook.svg"
import instagramImg from "../images/socialmedia/icons8-instagram.svg"
import twitterImg from "../images/socialmedia/icons8-twitter.svg"


const Logo = {
    width: "100px",
    height: "100px"
}

const SloganContainer = {
    marginTop: "15px",
    marginBottom: "25px"
}

const Slogan = {
    maxHeight: "50px",
    minWidth: "200px"
}

const SocialMediaText = {
    color: "white",
    textAlign: "center"
}

const ConstructionCatsContainer = {
    marginTop: "3rem"
}

const ConstructionCatsImage = {
    maxWidth: "600px",
    minWidth: "200px",
}

const UnderConstruction = () => {
    return (
        <main className="pageStyles">
            <title>Yarn Guardians</title>
            <div className="colContainer">
                <div className="rowContainer">
                    <img alt="Logo" style={Logo} src={logoImg} />
                </div>
                <div className="rowContainer" style={SloganContainer} >
                    <img alt="Slogan" style={Slogan} src={sloganImg} />
                </div>
                <div className="rowContainer">
                    <h2 style={SocialMediaText}>Für Neuigkeiten folgt uns auf:</h2>
                </div>
                <div className="rowContainer">
                    <div className="colContainer">
                        <a href="https://www.instagram.com/yarnguardians/">
                            <img className="socialbutton" src={instagramImg} alt="Instagram Link" />
                        </a>
                    </div>
                    <div className="colContainer">
                        <a href="https://twitter.com/YarnGuardians">
                            <img className="socialbutton" src={twitterImg} alt="Twitter Link" />
                        </a>
                    </div>
                    <div className="colContainer">
                        <a href="https://facebook.com/YarnGuardians">
                            <img className="socialbutton" src={facebookImg} alt="Facebook Link" />
                        </a>
                    </div>
                </div >
                <div className="rowContainer" style={ConstructionCatsContainer} >
                    <img
                        alt="Construction Cats"
                        style={ConstructionCatsImage}
                        src={constructionCats}
                    />
                </div>
            </div>
        </main >
    )

}

export default UnderConstruction