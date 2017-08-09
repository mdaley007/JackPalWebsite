// import modules
import   PropTypes            from 'prop-types'
import   React, { Component } from 'react'

// import style
import style from './Panel.css'

// component: Panel
class Panel extends React.Component {

    render() {
        const gridLocation = this.props.gridLocation
        const title        = this.props.title
        return (
            <div className={style.panel} id={gridLocation}>
                <div className={style.panelName}>{title}</div>
                <div className={style.directory}>
                    <div className={style.project}>
                        <div className={style.fileName}>File 01</div>
                        <span className="fileIcon glyphicons glyphicons-file"></span>
                    </div>
                    <div className={style.project}>
                        <div className={style.fileName}>File 02</div>
                        <div className={style.fileIcon + "fa fa-file"}></div>
                    </div>
                </div>
            </div>
        )
    }
}

Panel.propTypes = {
    gridLocation: PropTypes.string,
    title:        PropTypes.string
}

Panel.defaultProps = {
    gridLocation: "grid1",
    title: "TITLE"
}

export default Panel
