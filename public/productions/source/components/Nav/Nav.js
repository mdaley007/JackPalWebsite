// import modules
import   PropTypes            from 'prop-types'
import   React, { Component } from 'react'

// import style
import style from './Nav.css'

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
            <nav>

                <div className={style.left}>
                    <div className={style.navItem}><a href="#"><span className="fa fa-home"></span></a></div>
                    <div className={style.navItem}>
                        <a href="#">Workshops</a>
                        <div className={style.menu}>
                            <a href="#" className={style.menuItem}>Actors</a>
                            <a href="#" className={style.menuItem}>Writers</a>
                            <a href="#" className={style.menuItem}>Production</a>
                        </div>
                    </div>
                    <div className={style.navItem}>
                        <a href="#">About</a>
                        <div className={style.menu}>
                            <a href="#" className={style.menuItem}>Mission</a>
                            <a href="#" className={style.menuItem}>Who Are We?</a>
                            <a href="#" className={style.menuItem}>Contact Us</a>
                        </div>
                    </div>
                </div>

                <div className={style.right}>
                    <div className={style.navItem}><a href="#">Settings</a></div>
                    <div className={style.navItem}>
                        <a href="#">Enter</a>
                        <div className={style.menu}>
                            <a href="#" className={style.menuItem}>Sign-Up</a>
                            <a href="#" className={style.menuItem}>Sign-In</a>
                            <a href="#" className={style.menuItem}>Sign-Out</a>
                        </div>
                    </div>
                </div>

            </nav>
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
