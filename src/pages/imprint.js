import * as React from "react"
import { Link } from "gatsby"
import { Helmet } from 'react-helmet'

const Imprint = () => {
    return (
        <>
            <Helmet>
                <meta name={`robots`} content={`noindex, nofollow`} />
            </Helmet>
            <main className="pageStyles rowContainer">
                <title>Impressum</title>
                <div className="floatingButton">
                    <Link to={`/`} className="button">Home</Link>
                </div>
                <div className="backgroundBox" style={{ maxWidth: "1000px" }}>
                    <h1 className="headingStyles">Impressum</h1>
                    <h2>KONTAKT</h2>
                    <p>
                        Van An Nguyen<br />
                        c/o Grosch Postflex #1586<br />
                        Emsdettener Str. 10<br />
                        48268 Greven<br />
                        <br />
                        E-Mail: <a href={"mailto:yarn-guardians@outlook.com"}>yarn-guardians@outlook.com</a><br />
                        Mobil: <a href="tel:+4915231778275">+49 (0)152 3177 8275</a><br />
                        <br />
                        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <br />
                        <a href={"http://ec.europa.eu/consumers/odr"}>http://ec.europa.eu/consumers/odr</a>
                        <br />
                        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                        Verbraucherschlichtungsstelle teilzunehmen.
                    </p>


                    <h2>HAFTUNG FÜR INHALTE</h2>
                    <p>
                        Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach
                        den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter
                        jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen
                        oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                        Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
                        allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst
                        ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
                        Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
                        entfernen.
                    </p>

                    <h2>HAFTUNG FÜR LINKS</h2>
                    <p>
                        Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen
                        Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr
                        übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder
                        Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
                        Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum
                        Zeitpunkt der Verlinkung nicht erkennbar.
                        Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
                        Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
                        Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                    </p>

                    <h2>URHEBERRECHT</h2>
                    <p>
                        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
                        deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                        Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
                        Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind
                        nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                        Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die
                        Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
                        gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
                        bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
                        werden wir derartige Inhalte umgehend entfernen.
                    </p>

                    <p>
                        Quelle: <a href={"https://www.e-recht24.de/"}>https://www.e-recht24.de/</a>
                    </p>

                </div>
            </main>
        </>
    )
}

export default Imprint