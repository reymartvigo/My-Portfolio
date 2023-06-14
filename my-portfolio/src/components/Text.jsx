import React from 'react'

const Text = () => {
    return (
        <div className="text-slider">
            <div className="text">
                <ion-icon name="barbell"></ion-icon>
                <p>Hi! I'm <span>Reymart</span></p>
                <ion-icon name="desktop"></ion-icon>
                <p>Welcome</p>
                <ion-icon name="headset"></ion-icon>
                <p>Frontend <span>Developer</span></p>
                <ion-icon name="game-controller"></ion-icon>
                <div id="laptop">
                    <p >Get In Touch</p>
                    <ion-icon name="school"></ion-icon>
                    <p>Let's Create Something <span>Amazing!</span></p>
                    <ion-icon name="trophy"></ion-icon>
                    <p>Let's Connect</p>
                    <ion-icon name="mic"></ion-icon>
                </div>
            </div>
        </div>
    )
}

export default Text