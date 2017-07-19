// import modules
import React from 'react'
import ReactDOM from 'react-dom'

// import css
import './main'

ReactDOM.render(
    <div>
        <h1>Jack Pal Industries</h1>
        <hr />
        <ul>
            <li><a href='/blog'>Blog</a></li>
            <li><a href='/construction'>Construction</a></li>
            <li><a href='/education'>Education</a></li>
            <li><a href='/fashion'>Fashion</a></li>
            <li><a href='/food'>Food</a></li>
            <li><a href='/journalism'>Journalism</a></li>
            <li><a href='/productions'>Productions</a></li>
            <li><a href='/software'>Software</a></li>
        </ul>
    </div>,
    document.getElementById('root')
);
