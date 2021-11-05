import * as React from "react"
import constructionCats from "../images/buildingCrop.png"
import logoImg from "../images/EmblemWhite.svg"
import sloganImg from "../images/TextWhite.svg"
import facebookImg from "../images/socialmedia/icons8-facebook.svg"
import instagramImg from "../images/socialmedia/icons8-instagram.svg"
import twitterImg from "../images/socialmedia/icons8-twitter.svg"

const UnderConstruction = () => {
    return (
        <main className="pageStyles">
            <title>Yarn Guardians</title>
            <div className="colContainer">
                <div className="rowContainer">
                    <img alt="Logo" style={{ width: "100px", height: "100px" }} src={logoImg} />
                </div>
                <div className="rowContainer" style={{ marginTop: "15px", marginBottom: "25px" }} >
                    <img alt="Slogan" style={{ maxHeight: "50px", minWidth: "200px" }} src={sloganImg} />
                </div>
                <div className="rowContainer">
                    <img
                        alt="Construction Cats"
                        style={{ maxWidth: "600px", minWidth: "200px" }}
                        src={constructionCats}
                    />
                </div>
                <div className="rowContainer">
                    <h1 className="headingStyles" id="catstructionheading">Page is under <b style={{ fontWeight: "bold" }} >cat</b>struction...</h1>
                </div>
                <div className="rowContainer">
                    <h2 style={{ color: "white" }}>Follow us on social media:</h2>
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
            </div>
        </main>
    )

}

export default UnderConstruction