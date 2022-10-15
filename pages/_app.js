import React from "react"
import '../css/styles.css'

const MyApp = ({ Component, pageProps }) => {
    return (
        <div>
            {/* <Header /> */}
            <Component {...pageProps} />
        </div>
    )
}

export default MyApp;