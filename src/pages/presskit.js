import * as React from "react"
import { Link } from "gatsby"
import { Helmet } from 'react-helmet'

const Presskit = () => {
    return (
        <>
            <Helmet>
                <meta name={`robots`} content={`noindex, nofollow`} />
            </Helmet>
            <main className="pageStyles rowContainer">
                <title>Presse</title>
                <div className="floatingButton">
                    <Link to={`/`} className="button">Home</Link>
                </div>
                <div className="backgroundBox" style={{ maxWidth: "1000px", minWidth: "250px" }}>
                    <h1 className="headingStyles">Presse</h1>
                    <div className="rowContainer">
                        <div>
                            <h2>Fact Sheet</h2>
                            <h3>Developers</h3>
                            <p>Van An Nguyen</p>
                            <p>Philip Hell</p>
                            <p>Vladislav Hnatovskiy</p>
                            <p>Sabrina Döpp</p>
                            <p>Regina Krämer</p>
                            <br />
                            <i>Based in Saarbrücken, Germany</i>
                            <br />
                            <h3>Business contact</h3>
                            <a href={"mailto:yarn-guardians@outlook.com"}>yarn-guardians@outlook.com</a>
                            <br />
                            <h3>Social Media</h3>
                            <a href="https://www.instagram.com/yarnguardians/">
                                Instagram
                            </a> <br />
                            <a href="https://twitter.com/YarnGuardians">
                                Twitter
                            </a><br />
                            <a href="https://facebook.com/YarnGuardians">
                                Facebook
                            </a>
                            <h3>Address</h3>
                            <p>
                                c/o Grosch Postflex #1586
                                Emsdettener Str. 10
                                48268 Greven
                            </p>
                            <h3>Phone</h3>
                            <a href="tel:+4915231778275">+49 (0)152 3177 8275</a>
                        </div>
                        <div>
                            <h2>Description</h2>
                            <p>The cute Mienyans fly through various worlds and collect the powerful Yarn Balls to keep the peace. The gameplay reminds of a mixture between the Metroidvania and Shoot'em up (or Cute'em up) genres. The hand-drawn 2D animations are eye-catching and along with the lovable characters add to the game's charm.</p>

                            <h2>About Us</h2>
                            Through Yarn Guardians, a five-person team pursues its passion for games and game development. Each team member brings special skills from the disciplines of illustration and animation, programming, UX design, storytelling and dramaturgy, among others. Thus, all content is created in-house.
                        </div>
                    </div>
                </div>

            </main>
        </>
    )
}

export default Presskit

