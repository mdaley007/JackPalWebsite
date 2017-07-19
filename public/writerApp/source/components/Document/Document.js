// import modules
import   PropTypes    from 'prop-types'
import   React        from 'react'
import { DragSource } from 'react-dnd'

// import style
import styles from './Document.css'

// import files
import ItemTypes from '../../constants/itemTypes'

// define dnd constants
const documentSource = {
    beginDrag(props) {
        return {
            id: props.id
        }
    }
}

// component: Document
@DragSource(ItemTypes.DOCUMENT, documentSource, (connect) => ({
    connectDragSource: connect.dragSource()
}))
class Document extends React.Component {

    render() {
        // get data from props
        const { connectDragSource, id, onMove, ...props } = this.props
        const filename = this.props.document.filename

        return connectDragSource(
            <li className={styles.document}>
                <div className={styles.icon}><i className='fa fa-file'></i></div>
                <div className={styles.fileName}>{filename}</div>
            </li>
        )
    }
}

Document.propTypes = {
    document: PropTypes.object,
}

Document.defaultProps = {
    document: {filename: 'filename'},
}

export default Document
