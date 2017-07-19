// modules
import React from 'react';

// About Page
export default class About extends React.Component {
    render() {
        return (
            <div>
                <h3>About</h3>
                <video width='320' height='240' controls>
                    <source src='../media/Larry Lessig- Laws that choke creativity.mp4' type='video/mp4' />
                    <source src='../media/Larry Lessig- Laws that choke creativity.webm' type='video/webm' />
                    Your browser does not support the video tag.
                </video>
            </div>
        );
    }
}
