import * as React from "react"
import { Helmet } from 'react-helmet'
import "@fontsource/urbanist"
import "@fontsource/quicksand"
import "@fontsource/open-sans"
import UnderConstruction from "../components/underConstruction"
import Footer from "../components/footer"
// markup
const IndexPage = () => {
    return (
        <main>
            <Helmet>
                <title>Yarn Guardians</title>
                <meta name="description" content="Yarn Guardians is an indie game project created by a team of five developers from Saarland, Germany. It is a wholesome mix between Shoot'em Up and Metroidvania with handdrawn 2D animations. Join the cute winged Rudy on his adventure to find the legendary Yarn Balls and protect them from power-hungry enemies. Play along with friends as Rudy teams up with allies an his journey. Or maybe you want to challenge your friends in a Versus match?"></meta>
            </Helmet>
            <UnderConstruction />
            <Footer />
        </main>
    )
}

export default IndexPage

