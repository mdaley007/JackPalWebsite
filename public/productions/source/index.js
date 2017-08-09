// import modules
import   React           from 'react'
import   ReactDOM        from 'react-dom'
import { BrowserHistory,
         Route,
         HashRouter as Router,
         Switch }        from 'react-router-dom'

// import styles
import style from './styles/main.css'

// import views
import About      from './views/About'
import Home       from './views/Home'
import Layout     from './views/Layout'
import Workshops  from './views/Workshops'
import WritersApp from './views/WriterApp'

// define router
const router = (
    <Router history={BrowserHistory}>
        <Route path='/'          component={Home} />
        <Route path='/About'     component={About} />
        <Route path='/Workshops' component={Workshops} />
    </Router>
)

// render router
ReactDOM.render(
    <WritersApp />,
    document.getElementById('root')
)
