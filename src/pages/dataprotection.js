import * as React from "react"
import { Link } from "gatsby"
import { Helmet } from 'react-helmet'

const DataProtection = () => {
    return (
        <>
            <Helmet>
                <meta name={`robots`} content={`noindex, nofollow`} />
            </Helmet>
            <main className="pageStyles rowContainer">
                <title>Data Protection</title>
                <div className="floatingButton">
                    <Link to={`/`} className="button">Zur Startseite</Link>
                </div>
                <div className="backgroundBox" style={{ maxWidth: "1000px", minWidth: "250px" }}>
                    <h1 className="headingStyles">Datenschutz</h1>
                    <h2>1. Datenschutz auf einen Blick</h2>
                    <h3>Allgemeine Hinweise</h3>
                    <p>
                        Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
                        personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
                        Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche
                        Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text
                        aufgeführten Datenschutzerklärung.
                    </p>
                    <h3>Datenerfassung auf dieser Website</h3>
                    <p>
                        Wer ist verantwortlich für die Datenerfassung auf dieser Website?
                        Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
                        Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
                    </p>
                    <p>
                        Wie erfassen wir Ihre Daten?
                        Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es
                        sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                        Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website
                        durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser,
                        Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt
                        automatisch, sobald Sie diese Website betreten.
                    </p>
                    <p>
                        Wofür nutzen wir Ihre Daten?
                        Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu
                        gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                        Welche Rechte haben Sie bezüglich Ihrer Daten?
                        Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck
                        Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die
                        Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur
                        Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft
                        widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung
                        der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein
                        Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
                        Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der
                        im Impressum angegebenen Adresse an uns wenden.
                        Analyse-Tools und Tools von Drittanbietern
                        Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das
                        geschieht vor allem mit sogenannten Analyseprogrammen.
                        Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der folgenden
                        Datenschutzerklärung.
                    </p>
                    <h2>2. Hosting und Content Delivery Networks (CDN)</h2>
                    <h3>Externes Hosting</h3>
                    <p>
                        Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die
                        personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des
                        Hosters gespeichert. Hierbei kann es sich v.a. um IP-Adressen, Kontaktanfragen, Meta- und
                        Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige
                        Daten, die über eine Website generiert werden, handeln.
                        Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren
                        potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer
                        sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen
                        professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
                        Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner
                        Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen.
                    </p>
                    <h2>
                        3. Allgemeine Hinweise und Pflichtinformationen
                    </h2>
                    <h3>Datenschutz</h3>
                    <p>
                        Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir
                        behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen
                        Datenschutzvorschriften sowie dieser Datenschutzerklärung.<br />
                        Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben.
                        Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können.
                        Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie
                        nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht. <br />
                        Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation
                        per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem
                        Zugriff durch Dritte ist nicht möglich.
                    </p>
                    <h3>Hinweis zur verantwortlichen Stelle</h3>
                    <p>
                        Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br />
                        Van An Nguyen<br />
                        c/o Grosch Postflex #1586<br />
                        Emsdettener Str. 10<br />
                        48268 Greven<br />
                        <br />
                        E-Mail: <a href={"mailto:yarn-guardians@outlook.com"}>yarn-guardians@outlook.com</a><br />
                        Mobil: <a href="tel:+4915231778275">+49 (0)152 3177 8275</a><br />
                    </p>
                    <p>
                        Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam
                        mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.
                        B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
                        Widerruf Ihrer Einwilligung zur Datenverarbeitung
                        Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich.
                        Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis
                        zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
                    </p>
                    <h3>
                        Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)
                    </h3>
                    <p>
                        WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E
                        ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN,
                        DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE
                        VERARBEITUNG IHRER PERSONENBEZOGENEN DATENWIDERSPRUCH
                        EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN
                        GESTÜTZTESPROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN
                        EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER
                        DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN
                        WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR
                        VERARBEITEN, ES SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE
                        GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN,
                        RECHTE UND FREIHEITEN ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER
                        GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG
                        VONRECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).
                        WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM
                        DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT
                        WIDERSPRUCH GEGEN DIE VERARBEITUNG BETREFFENDER
                        PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER
                        WERBUNGEINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT ES MIT
                        SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE
                        WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN
                        ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG
                        VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).
                    </p>
                    <h3>
                        Beschwerderecht bei der zuständigen Aufsichtsbehörde
                    </h3>
                    <p>
                        Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei
                        einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts,
                        ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht
                        besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
                        Recht auf Datenübertragbarkeit
                        Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines
                        Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen,
                        maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der
                        Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch
                        machbar ist
                    </p>
                    <h3>SSL- bzw. TLS-Verschlüsselung</h3>
                    <p>
                        Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher
                        Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber
                        senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie
                        daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem
                        Schloss-Symbol in Ihrer Browserzeile.
                        Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns
                        übermitteln, nicht von Dritten mitgelesen werden.
                    </p>
                    <h3>Auskunft, Löschung und Berichtigung</h3>
                    <p>
                        Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf
                        unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft
                        und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung
                        oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene
                        Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns
                        wenden.
                    </p>
                    <h3>Recht auf Einschränkung der Verarbeitung</h3>
                    <p>
                        Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
                        verlangen. Hierzu können Sie sich jederzeit unter der im Impressum angegebenen Adresse an
                        uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:
                    </p>
                    <ul>
                        <li>
                            Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten
                            bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der
                            Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer
                            personenbezogenen Daten zu verlangen.
                        </li>
                        <li>
                            Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig
                            geschah/geschieht, können Sie statt der Löschung die Einschränkung der
                            Datenverarbeitung verlangen.
                        </li>
                        <li>
                            Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur
                            Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen,
                            haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer
                            personenbezogenen Daten zu verlangen.
                        </li>
                        <li>
                            Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine
                            Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange
                            noch nicht feststeht, wessen Interessenüberwiegen, haben Sie das Recht, die
                            Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Wenn
                            Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen
                            diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur
                            Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum
                            Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus
                            Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines
                            Mitgliedstaats verarbeitet werden.
                        </li>
                    </ul>
                    <h3>Widerspruch gegen Werbe-E-Mails</h3>
                    <p>Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur
                        Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien
                        wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche
                        Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.
                    </p>

                    <h2>4. Datenerfassung auf dieser Website</h2>
                    <h3>Anfrage per E-Mail, Telefon oder Telefax</h3>
                    <p>Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive
                        aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der
                        Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht
                        ohne Ihre Einwilligung weiter.</p>
                    <p>
                        Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern
                        Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung
                        vorvertraglicher Maßnahmenerforderlich ist. In allen übrigen Fällen beruht die Verarbeitung
                        auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten
                        Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a
                        DSGVO) sofern diese abgefragt wurde.
                        Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns
                        zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für
                        die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens).
                        Zwingende gesetzliche Bestimmungen –insbesondere gesetzliche Aufbewahrungsfristen –
                        bleiben unberührt.
                    </p>

                    <h2>5. Newsletter</h2>
                    <h3>Newsletterdaten</h3>
                    <p>
                        Wenn Sie den auf der Website angebotenen Newsletter beziehen möchten, benötigen wir von
                        Ihnen eine E-Mail-Adresse sowie Informationen, welche uns die Überprüfung gestatten, dass
                        Sie der Inhaber der angegebenen E-Mail-Adresse sind und mit dem Empfang des Newsletters
                        einverstanden sind. Weitere Daten werden nicht bzw. nur auf freiwilliger Basis erhoben.
                        Diese Daten verwenden wir ausschließlich für den Versand der angeforderten Informationen
                        und geben diese nicht an Dritte weiter.
                        Die Verarbeitung der in das Newsletteranmeldeformular eingegebenen Daten erfolgt
                        ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Die erteilte
                        Einwilligung zur Speicherung der Daten, der E-Mail-Adresse sowie deren Nutzung zum
                        Versand des Newsletters können Sie jederzeit widerrufen, etwa über den „Austragen“-Link
                        im Newsletter. Die Rechtmäßigkeit der bereits erfolgten Datenverarbeitungsvorgänge bleibt
                        vom Widerruf unberührt.
                        Die von Ihnen zum Zwecke des Newsletter-Bezugs bei uns hinterlegten Daten werden von
                        uns bis zu Ihrer Austragung aus dem Newsletter bei uns bzw. dem Newsletterdiensteanbieter
                        gespeichert und nach der Abbestellung des Newsletters aus der Newsletterverteilerliste
                        gelöscht. Daten, die zu anderen Zwecken bei uns gespeichert wurden bleiben hiervon
                        unberührt.
                        Nach Ihrer Austragung aus der Newsletterverteilerliste wird Ihre E-Mail-Adresse bei uns
                        bzw. dem Newsletterdiensteanbieter ggf. in einer Blacklist gespeichert, um künftige Mailings
                        zu verhindern. Die Daten aus der Blacklist werden nur für diesen Zweck verwendet und nicht
                        mit anderen Daten zusammengeführt. Dies dient sowohl Ihrem Interesse als auch unserem
                        Interesse an der Einhaltung der gesetzlichen Vorgaben beim Versand von Newslettern
                        (berechtigtes Interesse im Sinne des Art. 6 Abs. 1 lit. f DSGVO). Die Speicherung in der
                        Blacklist ist zeitlich nicht befristet. Sie können der Speicherung widersprechen, sofern
                        Ihre Interessen unser berechtigtes Interesse überwiegen.
                    </p>
                    <p>
                        Quelle: <a href={"https://www.e-recht24.de/"}>https://www.e-recht24.de/</a>
                    </p>

                    <h2>6. Social Media</h2>
                    <h3>Verlinkung Social-Media über Grafik oder Textlink</h3>
                    <p>Wir bewerben auf unserer Webseite auch Präsenzen auf den nachstehend aufgeführten sozialen Netzwerken. Die Einbindung erfolgt dabei über eine verlinkte Grafik des jeweiligen Netzwerks. Durch den Einsatz dieser verlinkten Grafik wird verhindert, dass es bei dem Aufruf einer Website, die über eine Social-Media-Bewerbung verfügt, automatisch zu einem Verbindungsaufbau zum jeweiligen Server des sozialen Netzwerks kommt, um eine Grafik des jeweiligen Netzwerkes selbst darzustellen. Erst durch einen Klick auf die entsprechende Grafik wird der Nutzer zu dem Dienst des jeweiligen sozialen Netzwerks weitergeleitet. Nach der Weiterleitung des Nutzers werden durch das jeweilige Netzwerk Informationen über den Nutzer erfasst. Es kann hierbei nicht ausgeschlossen werden, dass eine Verarbeitung der so erhobenen  Daten in den USA stattfindet. Dies sind zunächst Daten wie IP-Adresse, Datum, Uhrzeit und besuchte Seite. Ist der Nutzer währenddessen in seinem Benutzerkonto des jeweiligen Netzwerks eingeloggt, kann der Netzwerk-Betreiber ggf. die gesammelten Informationen des konkreten Besuchs des Nutzers dem persönlichen Account des Nutzers zuordnen. Interagiert der Nutzer über einen „Teilen“-Button des jeweiligen Netzwerks, können diese Informationen in dem persönlichen Benutzerkonto des Nutzers gespeichert und ggf. veröffentlicht werden. Will der Nutzer verhindern, dass die gesammelten Informationen unmittelbar seinem Benutzerkonto zugeordnet werden, muss er sich vor dem Anklicken der Grafik ausloggen. Zudem besteht die Möglichkeit, das jeweilige Benutzerkonto entsprechend zu konfigurieren. Folgende soziale Netzwerke werden in unsere Seite durch Verlinkung eingebunden:
                    </p>
                    <b>Facebook</b>
                    <p>Facebook Ireland Limited, 4 Grand Canal Square, Dublin 2, Ireland, ein Tochterunternehmen der Facebook Inc., 1601 S. California Ave., Palo Alto, CA 94304, USA. Datenschutzerklärung: <a href={"https://www.facebook.com/policy.php"}>https://www.facebook.com/policy.php</a></p>
                    <b>Twitter</b>
                    <p>Twitter Inc., 795 Folsom St., Suite 600, San Francisco, CA 94107, USA Datenschutzerklärung: <a href={"https://twitter.com/privacy"}>https://twitter.com/privacy</a></p>
                    <b>Instagram</b>
                    <p>Facebook Ireland Limited, 4 Grand Canal Square, Dublin 2, Ireland, ein Tochterunternehmen der Facebook Inc., 1601 S. California Ave., Palo Alto, CA 94304, USA. Datenschutzerklärung: <a href={"https://help.instagram.com/519522125107875"}>https://help.instagram.com/519522125107875</a></p>
                    <h3>Facebook</h3>
                    <p>Zur Bewerbung unserer Produkte und Leistungen sowie zur Kommunikation mit Interessenten oder Kunden betreiben wir eine Firmenpräsenz auf der Plattform Facebook.
                        <br />Auf dieser Social-Media-Plattform sind wir gemeinsam mit der Facebook Ireland Ltd., 4 Grand Canal Square, Grand Canal Harbour, Dublin 2 Ireland, verantwortlich.
                        <br /><br />Der Datenschutzbeauftragte von Facebook kann über ein Kontaktformular erreicht werden:
                        <br /><a href={"https://www.facebook.com/help/contact/540977946302970"}>https://www.facebook.com/help/contact/540977946302970</a>
                        <br /><br />Die gemeinsame Verantwortlichkeit haben wir in einer Vereinbarung bezüglich der jeweiligen Verpflichtungen im Sinne der DSGVO geregelt. Diese Vereinbarung, aus der sich die gegenseitigen Verpflichtungen ergeben, ist unter dem folgenden Link abrufbar:
                        <br /><a href={"https://www.facebook.com/legal/terms/page_controller_addendum"}>https://www.facebook.com/legal/terms/page_controller_addendum</a>
                        <br /><br />Rechtsgrundlage für die dadurch erfolgende und nachfolgend wiedergegebene Verarbeitung von personenbezogenen Daten ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse besteht an der Analyse, der Kommunikation sowie dem Absatz und der Bewerbung unserer Produkte und Leistungen.
                        <br />Rechtsgrundlage kann auch eine Einwilligung des Nutzers gemäß Art. 6 Abs. 1 lit. a DSGVO gegenüber dem Plattformbetreiber sein. Die Einwilligung hierzu kann der Nutzer nach Art. 7 Abs. 3 DSGVO jederzeit durch eine Mitteilung an den Plattformbetreiber für die Zukunft widerrufen.
                        <br />Bei dem Aufruf unseres Onlineauftritts auf der Plattform Facebook werden von der Facebook Ireland Ltd. als Betreiberin der Plattform in der EU Daten des Nutzers (z.B. persönliche Informationen, IP-Adresse etc.) verarbeitet.
                        <br />Diese Daten des Nutzers dienen zu statistischen Informationen über die Inanspruchnahme unserer Firmenpräsenz auf Facebook. Die Facebook Ireland Ltd. nutzt diese Daten zu Marktforschungs- und Werbezwecken sowie zur Erstellung von Profilen der Nutzer. Anhand dieser Profile ist es der Facebook Ireland Ltd. beispielsweise möglich, die Nutzer innerhalb und außerhalb von Facebook interessenbezogen zu bewerben. Ist der Nutzer zum Zeitpunkt des Aufrufes in seinem Account auf Facebook eingeloggt, kann die Facebook Ireland Ltd. zudem die Daten mit dem jeweiligen Nutzerkonto verknüpfen.
                        <br />Im Falle einer Kontaktaufnahme des Nutzers über Facebook werden die bei dieser Gelegenheit eingegebenen personenbezogenen Daten des Nutzers zur Bearbeitung der Anfrage genutzt. Die Daten des Nutzers werden bei uns gelöscht, sofern die Anfrage des Nutzers abschließend beantwortet wurde und keine gesetzlichen Aufbewahrungspflichten, wie z.B. bei einer anschließenden Vertragsabwicklung, entgegenstehen.
                        <br />Zur Verarbeitung der Daten werden von der Facebook Ireland Ltd. ggf. auch Cookies gesetzt.
                        <br /><br />Sollte der Nutzer mit dieser Verarbeitung nicht einverstanden sein, so besteht die Möglichkeit, die Installation der Cookies durch eine entsprechende Einstellung des Browsers zu verhindern. Bereits gespeicherte Cookies können ebenfalls jederzeit gelöscht werden. Die Einstellungen hierzu sind vom jeweiligen Browser abhängig. Bei Flash-Cookies lässt sich die Verarbeitung nicht über die Einstellungen des Browsers unterbinden, sondern durch die entsprechende Einstellung des Flash-Players. Sollte der Nutzer die Installation der Cookies verhindern oder einschränken, kann dies dazu führen, dass nicht sämtliche Funktionen von Facebook vollumfänglich nutzbar sind.
                        <br />Näheres zu den Verarbeitungstätigkeiten, deren Unterbindung und zur Löschung der von Facebook verarbeiteten Daten finden sich in der Datenrichtlinie von Facebook:
                        <br /><a href={"https://www.facebook.com/privacy/explanation"}>https://www.facebook.com/privacy/explanation</a>
                        <br /><br />Es ist nicht ausgeschlossen, dass die Verarbeitung durch die Facebook Ireland Ltd. auch über die Facebook Inc., 1601 Willow Road, Menlo Park, California 94025 in den USA erfolgt.
                    </p>
                    <h3>Twitter</h3>
                    <p>Wir unterhalten bei Twitter eine Onlinepräsenz um unser Unternehmen sowie unsere Leistungen zu präsentieren und mit Kunden/Interessenten zu kommunizieren. Twitter ist ein Service der Twitter Inc., 1355 Market Street, Suite 900, San Francisco, CA 94103, USA.
                        <br />Insofern weisen wir darauf hin, dass die Möglichkeit besteht, dass Daten der Nutzer außerhalb der Europäischen Union, insbesondere in den USA, verarbeitet werden. Hierdurch können gesteigerte Risiken für die Nutzer insofern bestehen, als dass z.B. der spätere Zugriff auf die Nutzerdaten erschwert werden kann. Auch haben wir keinen Zugriff auf diese Nutzerdaten. Die Zugriffsmöglichkeit liegt ausschließlich bei Twitter.
                        <br />Die Datenschutzhinweise von Twitter finden Sie unter:
                        <br /><a href={"https://twitter.com/de/privacy"}>https://twitter.com/de/privacy</a>
                    </p>
                    <h3>Instagram</h3>
                    <p>Zur Bewerbung unserer Produkte und Leistungen sowie zur Kommunikation mit Interessenten oder Kunden betreiben wir eine Firmenpräsenz auf der Plattform Instagram.
                        <br />Auf dieser Social-Media-Plattform sind wir gemeinsam mit der Facebook Ireland Ltd., 4 Grand Canal Square, Grand Canal Harbour, Dublin 2 Ireland, verantwortlich.
                        <br />Der Datenschutzbeauftragte von Instagram kann über ein Kontaktformular erreicht werden:
                        <br /><a href={"https://www.facebook.com/help/contact/540977946302970"}>https://www.facebook.com/help/contact/540977946302970</a>
                        <br /><br />Die gemeinsame Verantwortlichkeit haben wir in einer Vereinbarung bezüglich der jeweiligen Verpflichtungen im Sinne der DSGVO geregelt. Diese Vereinbarung, aus der sich die gegenseitigen Verpflichtungen ergeben, ist unter dem folgenden Link abrufbar:
                        <br /><a href={"https://www.facebook.com/legal/terms/page_controller_addendum"}>https://www.facebook.com/legal/terms/page_controller_addendum</a>
                        <br /><br />Rechtsgrundlage für die dadurch erfolgende und nachfolgend wiedergegebene Verarbeitung von personenbezogenen Daten ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse besteht an der Analyse, der Kommunikation sowie dem Absatz und der Bewerbung unserer Produkte und Leistungen.
                        <br />Rechtsgrundlage kann auch eine Einwilligung des Nutzers gemäß Art. 6 Abs. 1 lit. a DSGVO gegenüber dem Plattformbetreiber sein. Die Einwilligung hierzu kann der Nutzer nach Art. 7 Abs. 3 DSGVO jederzeit durch eine Mitteilung an den Plattformbetreiber für die Zukunft widerrufen.
                        <br /><br />Bei dem Aufruf unseres Onlineauftritts auf der Plattform Instagram werden von der Facebook Ireland Ltd. als Betreiberin der Plattform in der EU Daten des Nutzers (z.B. persönliche Informationen, IP-Adresse etc.) verarbeitet.
                        <br />Diese Daten des Nutzers dienen zu statistischen Informationen über die Inanspruchnahme unserer Firmenpräsenz auf Instagram. Die Facebook Ireland Ltd. nutzt diese Daten zu Marktforschungs- und Werbezwecken sowie zur Erstellung von Profilen der Nutzer. Anhand dieser Profile ist es der Facebook Ireland Ltd. beispielsweise möglich, die Nutzer innerhalb und außerhalb von Instagram interessenbezogen zu bewerben. Ist der Nutzer zum Zeitpunkt des Aufrufes in seinem Account auf Instagram eingeloggt, kann die Facebook Ireland Ltd. zudem die Daten mit dem jeweiligen Nutzerkonto verknüpfen.
                        <br /><br />Im Falle einer Kontaktaufnahme des Nutzers über Instagram werden die bei dieser Gelegenheit eingegebenen personenbezogenen Daten des Nutzers zur Bearbeitung der Anfrage genutzt. Die Daten des Nutzers werden bei uns gelöscht, sofern die Anfrage des Nutzers abschließend beantwortet wurde und keine gesetzlichen Aufbewahrungspflichten, wie z.B. bei einer anschließenden Vertragsabwicklung, entgegenstehen.
                        <br /><br />Zur Verarbeitung der Daten werden von der Facebook Ireland Ltd. ggf. auch Cookies gesetzt.
                        <br />Sollte der Nutzer mit dieser Verarbeitung nicht einverstanden sein, so besteht die Möglichkeit, die Installation der Cookies durch eine entsprechende Einstellung des Browsers zu verhindern. Bereits gespeicherte Cookies können ebenfalls jederzeit gelöscht werden. Die Einstellungen hierzu sind vom jeweiligen Browser abhängig. Bei Flash-Cookies lässt sich die Verarbeitung nicht über die Einstellungen des Browsers unterbinden, sondern durch die entsprechende Einstellung des Flash-Players. Sollte der Nutzer die Installation der Cookies verhindern oder einschränken, kann dies dazu führen, dass nicht sämtliche Funktionen von Facebook vollumfänglich nutzbar sind.
                        <br />Näheres zu den Verarbeitungstätigkeiten, deren Unterbindung und zur Löschung der von Instagram verarbeiteten Daten finden sich in der Datenrichtlinie von Instagram:
                        <br /><a href={"https://help.instagram.com/519522125107875"}>https://help.instagram.com/519522125107875</a>
                        <br /><br />Es ist nicht ausgeschlossen, dass die Verarbeitung durch die Facebook Ireland Ltd. auch über die Facebook Inc., 1601 Willow Road, Menlo Park, California 94025 in den USA erfolgt.
                        <br />
                        <br />Quelle: <a href={"https://www.ratgeberrecht.eu/leistungen/muster-datenschutzerklaerung.html"}>Muster-Datenschutzerklärung</a> der <a href={"https://www.ratgeberrecht.eu/datenschutz/datenschutzerklaerung-generator-dsgvo.html"}>Anwaltskanzlei Weiß & Partner</a></p>

                </div>

            </main>
        </>
    )
}

export default DataProtection

