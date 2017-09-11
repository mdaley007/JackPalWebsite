// import modules
import PropTypes from 'prop-types'
import React     from 'react'

// import components
import DocumentIcon from '../DocumentIcon'

// import style
import style from './Panel.css'

// component: Panel
class Panel extends React.Component {

    render() {
        const gridLocation = this.props.gridLocation
        const phase        = this.props.phase
        const projectList  = this.props.projectList

        return (
            <div className={style.panel} id={gridLocation}>
                <div className={style.title}>{phase.value + '. ' + phase.phase}</div>
                <div className={style.directory}>
                    {projectList.map( (project, key) => {
                        if (project.phase == phase) {
                            return(<DocumentIcon key={key} filename={project.filename} />)
                        }
                    })}
                </div>
            </div>
        )
    }
}

Panel.propTypes = {
    gridLocation: PropTypes.string,
    phase:        PropTypes.object,
    projectList:  PropTypes.array,
}

Panel.defaultProps = {
    gridLocation: 'grid1',
    phase: {value: 1, phase: 'Step Outline'},
    projectList: [],
}

export default Panel
