// import modules
import PropTypes from 'prop-types'
import React     from 'react'

// import style
import style from './Notecard.css'

// component: Notecard
class Notecard extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            titleEditing: false,
            textEditing:  false,
        }
    }

    render() {
        const {cardTitle, cardText, ...props} = this.props
        const titleEditing = this.state.titleEditing
        const textEditing = this.state.textEditing

        return (
            <div className={style.notecard}>
                {titleEditing ? this.renderEditTitle(cardTitle) : this.renderNoteTitle(cardTitle)}
                {this.renderNoteText(cardText)}
            </div>
        )
    }

    renderNoteTitle = (cardTitle) => {
        return (
            <div className={style.cardTitle} onClick={this.editTitle}>{cardTitle}</div>
        )
    }
    renderNoteText = (cardText) => {
        return (
            <div className={style.cardText}>{cardText}</div>
        )
    }
    renderEditTitle = (cardTitle) => {
        return (
            <input
                type="text"
                className={style.cardTitle}
                ref={(e) => e ? e.selectionStart = cardTitle.length : null}
                autoFocus={true}
                defaultValue={cardTitle}
                onBlur={this.finishEdit}
                onKeyPress={this.checkEnter}
            />
        )
    }
    renderEditText= (cardTitle) => {
        return (
            'test'
        )
    }

    editTitle = () => {
        this.setState({
            titleEditing: true
        })
    }
    editText = () => {
        this.setState({
            textEditing: true
        })
    }
    checkEnter = (e) => {
        if (e.key === 'Enter') {
            this.finishEdit(e)
        }
    }
    finishEdit = (e) => {
        const value = e.target.value;

        if (this.props.onEdit) {
            this.props.onEdit(value)
        }

        this.setState({
            titleEditing: false,
            textEditing: false,
        })
    }

}

Notecard.propTypes = {
    cardTitle: PropTypes.string,
    cardText:  PropTypes.string,
}

Notecard.defaultProps = {
    cardTitle: 'SCENE NAME',
    cardText:  'This is where the scene description goes...',
}

export default Notecard
