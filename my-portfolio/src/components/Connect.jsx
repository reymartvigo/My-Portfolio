import React from 'react'

const Connect = () => {
    return (
        <footer id="connect-section">
            <h1>LET'S CONNECT</h1>

            <div className="connect-wrapper">
                <div className="connect">
                    <span>linkedIn</span>
                    <span key="linkedIn"><a href="https://www.linkedin.com/in/reymart-vigo/" target='_blank'><ion-icon name="logo-linkedin"></ion-icon></a></span>

                </div>

                <div className="connect">
                    <span>github</span>
                    <span key="github"><a href="https://github.com/reymartvigo" target='_blank'><ion-icon name="logo-github"></ion-icon></a></span>

                </div>

                <div className="connect">
                    <span>twitter</span>
                    <span key="twitter"><a href="https://twitter.com/reymart_vigo" target='_blank'><ion-icon name="logo-twitter"></ion-icon></a></span>
                </div>
            </div>
        </footer >
    )
}

export default Connect