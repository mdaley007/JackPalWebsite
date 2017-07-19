// import modules
import React, { Component } from 'react'

// import styles
import styles from '../styles/Layout.css'

// view: Layout
class Layout extends Component {
    render() {
        return (
            <div className={styles.bodyContainer}>

                <div className={styles.ribbon}>Ribbon</div>
                <div className={styles.mainWindow}>
                    <div className={styles.doc}>
                        <h5>Document Manager</h5>
                        <ul>
                            <li>doc1</li>
                            <li>doc2</li>
                            <li>doc3</li>
                            <li>doc4</li>
                            <li>doc5</li>
                        </ul>
                    </div>
                    <div className={styles.mainView}>Main View</div>
                    <div className={styles.divider}></div>
                    <div className={styles.detailView}>Detail View</div>
                </div>
                <div className={styles.statusBar}>Status Bar</div>

            </div>
        )
    }
}

export default Layout
