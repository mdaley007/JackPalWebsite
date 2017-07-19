// import modules
import   React, { Component } from 'react'
import { DragDropContext }    from 'react-dnd'
import   HTML5Backend         from 'react-dnd-html5-backend'

// import styles
import styles from '../styles/App.css'

// import components
import Nav   from '../components/Nav'
import Panel from '../components/Panel'

// view: App
@DragDropContext(HTML5Backend)
class App extends Component {
    render() {
        const stepOutlines    = this.getStepOutlines()
        const synopses        = this.getSynopses()
        const treatments      = this.getTreatments()
        const scratchScenes   = this.getScratchScenes()
        const rehearsalScenes = this.getRehearsalScenes()
        const screenplays     = this.getScreenplays()

        return (
            <div className={styles.bodyContainer}>

                <div className={styles.navBar}>NavBar</div>
                <div className={styles.mainWindow}>
                    <Panel title='STEP OUTLINES'      docList={stepOutlines} />
                    <Panel title='SYNOPSES'           docList={synopses}/>
                    <Panel title='TREATMENTS'         docList={treatments}/>
                    <Panel title='SCENES - SCRATCH'   docList={scratchScenes}/>
                    <Panel title='SCENES - REHEARSAL' docList={rehearsalScenes} />
                    <Panel title='SCREENPLAYS'        docList={screenplays}/>
                </div>

            </div>
        )
    }
    getStepOutlines() {
        return [
            {filename: 'test1'},
            {filename: 'test2'},
            {filename: 'test3'},
            {filename: 'test4'},
        ]
    }
    getSynopses() {
        return [
            {filename: 'King of Children, The'},
            {filename: 'Secret Life of Walter Mitty, The'},
            {filename: 'Kiss Me Deadly'},
            {filename: 'Kiss Me Deadly'},
            {filename: 'Kiss Me Deadly'},
            {filename: 'Kiss Me Deadly'},
            {filename: 'Kiss Me Deadly'},
        ]
    }
    getTreatments() {
        return [
            {filename: 'test1'},
            {filename: 'test2'},
            {filename: 'test3'},
            {filename: 'test4'},
        ]
    }
    getScratchScenes() {
        return [
            {filename: 'test1'},
            {filename: 'test2'},
            {filename: 'test3'},
            {filename: 'test4'},
        ]
    }
    getRehearsalScenes() {
        return [
            {filename: 'test1'},
            {filename: 'test2'},
            {filename: 'test3'},
            {filename: 'test4'},
        ]
    }
    getScreenplays() {
        return [
            {filename: 'test1'},
            {filename: 'test2'},
            {filename: 'test3'},
            {filename: 'test4'},
        ]
    }
}

export default App
