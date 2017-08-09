// import modules
import   PropTypes            from 'prop-types'
import   React, { Component } from 'react'
import { BrowserRouter as Router,
         Link,
         Match,
         Route }              from 'react-router-dom'

// import style
import styles from './Nav.css'

// component: Navigation
class Nav extends React.Component {

    renderNavList(navList, alignment) {
        var title
        return(
            <ul className={alignment}>
                {navList.map( (navItem, key) => {
                    if (navItem.icon) {
                        title = (<i className={navItem.icon}></i>)
                    } else {
                        title = navItem.title
                    }
                    return (
                        <li className={styles.navItem} key={key}>
                            <Link to={navItem.path}>
                                {title}
                            </Link>
                            {this.renderNavMenu(navItem.submenu)}
                        </li>
                    )
                })}
            </ul>
        )
    }

    renderNavMenu(submenu) {
        if (submenu) {
            return(
                <ul className={styles.navMenu}>
                    {submenu.map( (menuItem, key) => {
                        return (
                            <li className={styles.menuItem} key={key}>
                                <Link to={menuItem.path}>
                                    {menuItem.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            )
        }
    }

    render() {
        const left  = this.props.navList.left
        const right = this.props.navList.right

        return (
            <Router>
                <nav className={styles.navBar}>
                    {this.renderNavList(left,  styles.left)}
                    {this.renderNavList(right, styles.right)}
                </nav>
            </Router>
        )
    }
}

Nav.propTypes = {
    navList: PropTypes.object
}

Nav.defaultProps = {
    navList: {
        "left": [
            {
                "title": "Home",
                "path": "/",
                "component": "Home",
                "icon": "fa fa-home",
                "submenu": null
            }
        ],
        "right" : []
    }
}

export default Nav

/*
            <Router>
                <nav className={styles.navBar}>
                    <ul className={styles.left}>
                        <li className={styles.navItem}>
                            <Link to='/'>
                                <i className='fa fa-home'></i>
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link to='/Workshops'>Workshops</Link>
                            <ul className={styles.navMenu}>
                                <li className={styles.menuItem}>
                                    <Link to='/Workshops/Actors'>Actors</Link>
                                </li>
                                <li className={styles.menuItem}>
                                    <Link to='/Workshops/Screenwriting'>Screenwriting</Link>
                                </li>
                                <li className={styles.menuItem}>
                                    <Link to='/Workshops/Production'>Production</Link>
                                </li>
                            </ul>
                        </li>
                        <li className={styles.navItem}>
                            <Link to='/About'>About</Link>
                        </li>
                    </ul>
                    <ul className={styles.right}>
                        <li className={styles.navItem}>
                            <Link to='#'>Enter</Link>
                            <ul className={styles.navMenu}>
                                <li className={styles.menuItem}>
                                    <Link to='/LogIn'>LogIn</Link>
                                </li>
                                <li className={styles.menuItem}>
                                    <Link to='/SignUp'>SignUp</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </Router>
*/
