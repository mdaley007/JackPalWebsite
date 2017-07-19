// import modules
import React from 'react'
import ReactDOM from 'react-dom'

// import css
import './global'
import style from './components/Panel/panel.css'

// import components
import Panel from './components/Panel'

// example files
const synopsisFiles = {}
const stepOutlineFiles = {}


ReactDOM.render(
    <div className={style.panelContainer}>
        <Panel title='SYNOPSIS' />
        <Panel title='STEP OUTLINES' />
        <Panel title='TREATMENTS' />
        <Panel title='SCENES (SCRATCH)' />
        <Panel title='SCENES (REHEARSAL)' />
        <Panel title='SCREENPLAYS' />
    </div>,
    document.getElementById('root')
);
