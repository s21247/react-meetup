import {Link} from 'react-router-dom';
import classes from './MainNavigation.module.css'

function MainNavigation() {
    return <header className={classes.header}>
        <div className={classes.logo}>Meetups</div>
        <nav>
            <ul>
                <li>
                    <Link to={'/'}>All Meet Ups</Link>
                </li>
                <li>
                    <Link to={'/newMeetup'}>Add New Meet Up</Link>
                </li>
                <li>
                    <Link to={'/favorites'}>My favorites</Link>
                </li>

            </ul>
        </nav>
    </header>
}

export default MainNavigation;