// import modules
import PropTypes from 'prop-types'
import React     from 'react'

// import components
import Line from '../Line'

// import style
import style from './Screenplay.css'

// component: Screenplay
class Screenplay extends React.Component {

    getStyle() {
        return style.description
    }

    render() {
        const script = this.props.script

        return (

            <div className={style.sheet}>

                {script.map( scene =>
                    scene.map( line => {
                        return(<Line line={line} />)
                    })
                )}

            </div>
        )
    }
}

Screenplay.propTypes = {
    script: PropTypes.array,
}

Screenplay.defaultProps = {
    script: [],
}

export default Screenplay

/*
    return(
        <div className={this.getStyle()}>
            {line.text}
        </div>
    )
*/
