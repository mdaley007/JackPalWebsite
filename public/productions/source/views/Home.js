// import modules
import React, { Component } from 'react'

// import components
import Nav from '../components/Nav'

// import styles
import style from '../styles/Home.css'

// import navList
import navList from './navList.json'

// view: Home
class Home extends Component {
    render() {
        return (
            <div className={style.window}>

                <Nav />

                <div className={style.workspace}></div>

            </div>
        )
    }
}

export default Home
