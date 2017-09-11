// import modules
import PropTypes from 'prop-types'
import React     from 'react'

// import style
import style from './DocumentIcon.css'

// component: DocumentIcon
class DocumentIcon extends React.Component {

    render() {
        const filename = this.props.filename

        return (
            <div className={style.documentIcon}>
                <div className={style.filename}>{filename}</div>
                <span className={style.icon + ' glyphicon glyphicon-file'}></span>
            </div>
        )
    }
}

DocumentIcon.propTypes = {
    filename: PropTypes.string,
}

DocumentIcon.defaultProps = {
    filename: 'TITLE',
}

export default DocumentIcon
