// import modules
import React, { Component } from 'react'

// import components
import Nav from '../components/Nav'

// import styles
import styles from '../styles/Home.css'

// import navList
import navList from './navList.json'

// view: Home
class Home extends Component {
    render() {
        return (
            <div className={styles.bodyContainer}>

                <Nav navList={navList} />

                <div className={styles.mainWindow}></div>

            </div>
        )
    }
}

export default Home

// example load image:
//<img src={require('../media/jackPalLogo-white.png')} width='200px' height='100px' />
