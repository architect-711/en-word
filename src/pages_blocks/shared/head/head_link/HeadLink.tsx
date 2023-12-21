import { NavLink } from "react-router-dom";
import Route from "../../../../typing/interface/Route";
import styles from './HeadLink.module.css';

interface Props {
    link: Route
}

export default function HeadLink({link}: Props): JSX.Element {
    return (
        <NavLink to={link.path} className={styles.link}>
            {link.name.replace(link.name.charAt(0), link.name.charAt(0).toUpperCase())}
        </NavLink>
    );
}
