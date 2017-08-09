// import modules
import React, { Component } from 'react'

// import components
import Nav   from '../components/Nav'
import Panel from '../components/Panel'

// import styles
import style from '../styles/WriterApp.css'

// import navList
import navList from './navList.json'

// view: WriterApp
class WriterApp extends Component {
    render() {
        return (
            <div className={style.window}>

                <Nav />

                <div className={style.workspace}>
                    <Panel gridLocation="grid2" />

                </div>

            </div>
        )
    }
}

export default WriterApp

/*
<Panel />
<Panel />
<Panel title="Test" gridLocation="grid5" />
<Panel />
<Panel title="Step Outline" gridLocation="grid5" />
*/
