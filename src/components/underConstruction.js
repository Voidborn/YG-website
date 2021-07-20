import * as React from "react"
import constructionCats from "../images/buildingCrop.png"
import logoImg from "../images/EmblemWhite.svg"
import sloganImg from "../images/TextWhite.svg"

const UnderConstruction = () => {
    return(
        <main className="pageStyles">
        <title>Yarn Guardians</title>
        <div className="colContainer">
            <div className="rowContainer">
                <img alt="Logo" style={{width:"100px", height:"100px"}} src={logoImg}/>
            </div>
            <div className="rowContainer" style={{marginTop:"15px", marginBottom:"25px"}} >
                <img alt="Slogan" style={{height:"50px"}} src={sloganImg} />
            </div>
            <div className="rowContainer">
            <img
                alt="Construction Cats"
                style={{width : "600px"}}
                src={constructionCats}
            />
            </div>
            <div className="rowContainer">
                <h1 className="headingStyles" id="catstructionheading">Page is under <em style={{fontWeight:"normal"}}>cat</em>struction...</h1>
            </div>
            <div className="rowContainer" style={{marginTop:"-10px"}}>
                <h2 className="headingStyles" id="catstructionheading">Maybe come back later?</h2>
            </div>
        </div>
    </main>
    )

}

export default UnderConstruction