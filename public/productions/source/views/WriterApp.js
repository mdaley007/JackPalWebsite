// import modules
import React from 'react'

// import components
import Nav   from '../components/Nav'
import Panel from '../components/Panel'

// import styles
import style from '../styles/WriterApp.css'

// import navList
import navList from './navList.json'

const phases = {
    stepOutline    : {value: 1, phase: 'Step Outline'},
    synopsis       : {value: 2, phase: 'Synopsis'},
    treatment      : {value: 3, phase: 'Treatment'},
    sceneScratch   : {value: 4, phase: 'Scene - Scratch'},
    sceneRehearsal : {value: 5, phase: 'Scene - Rehearsal'},
    screenplay     : {value: 6, phase: 'Screenplay'},
}

// view: WriterApp
class WriterApp extends React.Component {
    render() {
        const user = getUser('Jack Pal')
        var projectList = getProjects(user)

        return (
            <div className={style.window}>

                <Nav />

                <div className={style.workspace}>
                    <Panel gridLocation='grid1' phase={phases.stepOutline}    projectList={projectList} />
                    <Panel gridLocation='grid2' phase={phases.synopsis}       projectList={projectList} />
                    <Panel gridLocation='grid3' phase={phases.treatment}      projectList={projectList} />
                    <Panel gridLocation='grid4' phase={phases.sceneScratch}   projectList={projectList} />
                    <Panel gridLocation='grid5' phase={phases.sceneRehearsal} projectList={projectList} />
                    <Panel gridLocation='grid6' phase={phases.screenplay}     projectList={projectList} />
                </div>

            </div>
        )
    }
}

export default WriterApp

function getUser(username) {
    return {name: username}
}
function getProjects (user) {
    return [
        {filename: 'test10012', phase: phases.stepOutline},
        {filename: 'test2', phase: phases.synopsis},
        {filename: 'test3', phase: phases.treatment},
        {filename: 'test4', phase: phases.sceneScratch},
        {filename: 'test6', phase: phases.screenplay},
        {filename: 'test5', phase: phases.screenplay},
        {filename: 'test7', phase: phases.stepOutline},
        {filename: 'test8', phase: phases.stepOutline},
        {filename: 'test9', phase: phases.stepOutline},
        {filename: 'test10', phase: phases.stepOutline},
        {filename: 'test11', phase: phases.stepOutline},
        {filename: 'test12', phase: phases.stepOutline},
        {filename: 'test13', phase: phases.stepOutline},
        {filename: 'test14', phase: phases.stepOutline},
        {filename: 'test15', phase: phases.stepOutline},
        {filename: 'test15555555555555555555', phase: phases.sceneScratch},
        {filename: 'test16', phase: phases.sceneScratch},
        {filename: 'test17', phase: phases.sceneScratch},
        {filename: 'test18', phase: phases.stepOutline},
        {filename: 'test19', phase: phases.stepOutline},
        {filename: 'test20', phase: phases.stepOutline},
        {filename: 'test21', phase: phases.stepOutline},
        {filename: 'test22', phase: phases.stepOutline},
        {filename: 'test23', phase: phases.stepOutline},
    ]
}
