import * as React from "react"
import { Link } from "gatsby"
import { Helmet } from 'react-helmet'
import teamImage from "../images/team.jpg"

const teamImageStyle = {
    display: "block",
    maxWidth: "800px",
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto"
}

const Presskit = () => {
    return (
        <>
            <Helmet>
                <meta name={`robots`} content={`noindex, nofollow`} />
            </Helmet>
            <main className="pageStyles rowContainer">
                <title>Über Uns</title>
                <div className="floatingButton">
                    <Link to={`/`} className="button">Zur Startseite</Link>
                </div>
                <div className="backgroundBox" style={{ maxWidth: "1000px", minWidth: "250px" }}>
                    <h1 className="headingStyles">Über Uns</h1>
                    <div className="rowContainer">
                        <div>
                            <h2>Kontakt</h2>
                            <p><b>E-Mail:</b> <a href={"mailto:yarn-guardians@outlook.com"}>yarn-guardians@outlook.com</a></p>
                            <p><b>Telefon:</b> <a href="tel:+4915231778275">+49 (0)152 3177 8275</a></p>
                            <p><b>Postfach:</b><br />
                                pentapaw studios UG (haftungsbeschränkt)<br />
                                Halbergstraße 4<br />
                                66121 Saarbrücken
                            </p>
                            <h2>Das Spiel</h2>
                            <p>Yarn Guardians ist eine bunte Mischung aus den Genres Metroidvania und Shoot'Em Up verfeinert mit RPG Elementen. Unsere Protagonisten sind geflügelte Katzen - Mienyans, die mit Yarn Balls kämpfen, um das Gleichgewicht in der zersplitterten Welt wiederherzustellen. Das Abenteuer beginnt mit Rudy, einem fröhlichen, begeisterungsfähigen und mutigen Kater. Seine Neugier zieht ihn in ein Abenteuer ungeahnten Ausmaßes, denn er begibt sich auf die Spuren der sagenumwobenen Yarn Guardians.</p>
                            <h2>Das Team</h2>
                            <p>Mit Yarn Guardians geht das fünfköpfige Team ihrer Leidenschaft für Spiele und Spieleentwicklung nach. Jedes Teammitglied bringt spezielle Fähigkeiten mit, unter anderem aus den Bereichen Illustration und Animation, Programmierung, UX-Design, Storytelling und Dramaturgie. So werden alle Inhalte intern erstellt.
                            </p>
                            <img
                                alt="Team"
                                style={teamImageStyle}
                                src={teamImage}
                            />
                            <h3>Teammitglieder (links nach rechts)</h3>
                            <p><b>Regina Krämer: </b> Marketing & management</p>
                            <p><b>Sabrina Döpp: </b> Storytelling & dialogue writing</p>
                            <p><b>Vladislav Hnatovskiy: </b> Level design, environment art & sound</p>
                            <p><b>Philip Hell: </b> Code & game design</p>
                            <p><b>Van An Nguyen: </b> Animation & character art</p>




                        </div>
                    </div>
                </div>

            </main>
        </>
    )
}

export default Presskit

