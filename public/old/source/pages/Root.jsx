// modules
import React from 'react';

// components
import Footer from '../components/Footer';
import Header from '../components/Header';
import Nav    from '../components/Nav';

// Root Page
export default class Root extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Nav />
                {this.props.children}
                <Footer />
            </div>
        );
    }
}
