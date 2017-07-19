// modules
import   React  from 'react';
import { Link } from 'react-router-dom';

// Navigation Bar
export default () => {
    return (
        <nav>

            {/* Home Button */}
            <div class="homeButton">
                <i class='fa fa-home'></i>
            </div>

            {/* Workshops Button */}
            <div>
                Workshops
                <ul class="dropup">
                    <li>Acting</li>
                    <li>Production</li>
                    <li>Writers</li>
                </ul>
            </div>

            {/* About Button */}
            <div>About</div>

            {/* Blog Button */}
            <div>Blog</div>

            {/* Logout Button */}
            <div class="right">
                Logout
                <ul class="dropup right">
                    <li>Log In</li>
                    <li>Sign Up</li>
                </ul>
            </div>

        </nav>
    );
}
