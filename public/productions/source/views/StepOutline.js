// import modules
import React from 'react'

// import components
import Editable from '../components/Editable'
import Nav      from '../components/Nav'
import Notecard from '../components/Notecard'

// import styles
import style from '../styles/StepOutline.css'

// import navList
import navList from './navList.json'

// view: StepOutline
class StepOutline extends React.Component {
    render() {
        const notecard1 = getNotecard()

        return (
            <div className={style.window}>

                <Nav navList={navList}/>

                <div className={style.workspace}>

                    <Notecard
                        cardTitle={notecard1.cardTitle}
                        cardText={notecard1.cardText}
                        onEdit={this.editNote}
                    />
                    <Notecard />
                    <Notecard />
                    <Notecard />
                    <Notecard />
                    <Notecard />

                </div>

            </div>
        )
    }
}

export default StepOutline

function getNotecard() {
    return {
        cardTitle: 'This is the Title',
        cardText: 'This is a description of the scene. We need a lot of text to test the boundaries of this electronic representation of paper. If we keep typing maybe we will reach the end. The goal is to type so much text it cannot fit on the card. A few more lines should do it. Soon we will know how the html will handle information overflow. Soon it will be apparent what will happen if you type too many lines. Because if you type too many lines this will happen... I need another line to make this overflow',
    }
}
