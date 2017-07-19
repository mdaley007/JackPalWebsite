// modules
import React from 'react';

// components
import Footer from '../components/Footer';
import Nav    from '../components/Nav';

// style
var bodyStyle = {
    background: 'url("/media/jackPalLogo-transparent.png") no-repeat fixed center',
    backgroundColor: 'var(--backgroundColor)',
    backgroundSize: 'var(--backgroundWidth) var(--backgroundHeight)',
    fontFamily: 'var(--fontTitle)'
}

// Home Page
class Home extends React.Component {
    updateDimensions = () => {
        this.setState({
            width:  window.innerWidth,
            height: window.innerHeight
        });
    }
    updateMousePosition = (e) => {
        this.setState({
//            mouseX: e.screenX,
            mouseY: 200
        });
    }
    componentWillMount() {
        this.updateDimensions();
        this.updateMousePosition();
    }
    componentDidMount() {
        window.addEventListener('onmousemove', this.updateMousePosition);
        window.addEventListener('resize', this.updateDimensions);
    }
    componentWillUnmount() {
        window.removeEventListener('onmousemove', this.updateMousePosition);
        window.removeEventListener('resize', this.updateDimensions);
    }
    render() {
        return (
            <div style={bodyStyle}>
                <Nav />
                <h3>Home</h3>
                <p>innerWindow:  {this.state.width} x {this.state.height}</p>
                <p>client: {window.clientX}, {window.clientY}</p>
                <p>page: {window.pageX}, {window.pageY}</p>
                <p>screen: {window.screenX}, {window.screenY}</p>
                <p>test: {this.state.mouseX}, {this.state.mouseY}</p>
                <Footer />
            </div>
        );
    }
}
Home.propTypes = {
    value: React.PropTypes.string
};
Home.defaultProps = {
    value: ''
};
export default Home;
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
