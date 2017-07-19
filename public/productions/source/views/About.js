// import modules
import React, { Component } from 'react'

// import styles
import styles from '../styles/About.css'

// view: About
class About extends Component {
    render() {
        return (
            <div className={styles.bodyContainer}>

                <nav className={styles.navBar}>
                    Navigation Bar
                </nav>

                <div className={styles.mainWindow}>

                    <div className={styles.ribbon}>
                        Ribbon
                    </div>

                </div>

            </div>
        )
    }
}

export default About
