// import modules
import PropTypes from 'prop-types'
import React     from 'react'

// import style
import style from './Line.css'

// component: Line
class Line extends React.Component {

    getStyle(line) {
        switch(line.style) {
            case 'address':         return(style.address)
            case 'center':          return(style.center)
            case 'character':       return(style.character)
            case 'continued':       return(style.continued)
            case 'description':     return(style.description)
            case 'dialog':          return(style.dialog)
            case 'emphasis':        return(style.emphasis)
            case 'extension':       return(style.extension)
            case 'fadein':          return(style.fadein)
            case 'parenthetical':   return(style.parenthetical)
            case 'screenplayTitle': return(style.screenplayTitle)
            case 'shot':            return(style.shot)
            case 'slugline':        return(style.slugline)
            case 'subheader':       return(style.subheader)
            case 'transition':      return(style.transition)
            default:                return(style.default)
        }
    }

    render() {
        const line = this.props.line

        var Line
        switch(line.style) {
            case 'newline': Line = '(<br>)'
            default: Line = (
                <div className={this.getStyle(line)}>
                    {line.text}
                </div>
            )
        }

        return(Line)
    }
}

Line.propTypes = {
    line: PropTypes.object,
}

Line.defaultProps = {
    line: {
        style: 'center',
        text: '',
    },
}

export default Line
