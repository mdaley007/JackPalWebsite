// modules
import   React         from 'react';
import   ReactDOM      from 'react-dom';
import { BrowserRouter as Router,
         IndexRoute,
         Redirect,
         Route       } from 'react-router-dom';

// pages
import About            from './pages/About';
import ActingWorkshops  from './pages/ActingWorkshops';
import Blog             from './pages/Blog';
import Home             from './pages/Home';
import Industries       from './pages/Industries';
import Root             from './pages/Root';
import Workshops        from './pages/Workshops';
import WritingWorkshops from './pages/WritingWorkshops';

// router
const router = (
    <Router>
        <Route path='/' component={Home} />
    </Router>
);

// render
ReactDOM.render(
    router,
    document.getElementById('app')
);
/*
var WindowDimensions = React.createClass({
    render: function() {
        return <span>{this.state.width} x {this.state.height}</span>;
    },
    updateDimensions: function() {
        this.setState({width: $(window).width(), height: $(window).height()});
    },
    componentWillMount: function() {
        this.updateDimensions();
    },
    componentDidMount: function() {
        window.addEventListener("resize", this.updateDimensions);
    },
    componentWillUnmount: function() {
        window.removeEventListener("resize", this.updateDimensions);
    }
});
*/
