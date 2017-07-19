// modules

import PropTypes from 'prop-types'
import Component from 'react'
import React     from 'react'

// css
import styles from './panel'

// Panel
class Panel extends Component {
    render() {
        const title = this.props.title
        return (
            <div className={styles.panel}>
                <div className={styles.header}>
                    {title}
                </div>
                <div className={styles.body}>
                    <span className="fa fa-file-o"></span>
                </div>
            </div>
        )
    }
}

Panel.propTypes = {
    title: PropTypes.string,
}

Panel.defaultProps = {
    title: 'TITLE',
}

export default Panel
