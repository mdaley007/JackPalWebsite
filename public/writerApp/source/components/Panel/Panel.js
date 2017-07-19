// import modules
import   PropTypes    from 'prop-types'
import   React        from 'react'
import { DropTarget } from 'react-dnd'

// import components
import Document from '../Document'

// import style
import styles from './Panel.css'

// import files
import ItemTypes from '../../constants/itemTypes'

// define dnd constants
const documentTarget = {
    hover(targetProps, monitor) {
        const targetId = targetProps.id
        const sourceProps = monitor.getItem()
        const sourceId = sourceProps.id

        if (sourceId !== targetId) {
            targetProps.onMove( {sourceId, targetId} )
        }
    }
}

// component: Panel
@DropTarget(ItemTypes.DOCUMENT, documentTarget, (connect) => ({
    connectDropTarget: connect.dropTarget()
}))
class Panel extends React.Component {

    render() {
        // get data from props
        const { connectDropTarget, id, onMove, ...props } = this.props
        const title   = this.props.title;
        const docList = this.props.docList;

        return connectDropTarget(
            <div className={styles.panel}>

                <div className={styles.title}>{title}</div>
                <ul className={styles.docContainer}>
                    {docList.map( (document, index) =>
                        <Document document={document} key={index} />
                    )}
                </ul>
            </div>
        )
    }
}

Panel.propTypes = {
    title: PropTypes.string,
    docList: PropTypes.array,
}

Panel.defaultProps = {
    title: 'Title',
    docList: [],
}

export default Panel
/*
return connectDragSource(
    <li className={styles.document} key={key}>
        <div className={styles.icon}><i className='fa fa-file'></i></div>
        <div className={styles.fileName}>{doc.filename}</div>
    </li>
)
*/
