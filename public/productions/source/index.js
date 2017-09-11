// import modules
import   React           from 'react'
import   ReactDOM        from 'react-dom'

// import styles
import './styles/Main.css'

// import views
import Home             from './views/Home'
import ScreenplayReader from './views/ScreenplayReader'
import StepOutline      from './views/StepOutline'
import WritersApp       from './views/WriterApp'

// render router
ReactDOM.render(
    <StepOutline />,
    document.getElementById('root')
)
