import { NavLink } from "react-router-dom";
import styles from "./header.module.css";

const menu = [
    { title: 'home', to: "/" },
    { title: 'profile', to: "/profile" },
    { title: 'chat', to: "/chat" },
];

export const Header = () => {
    return (
        <div className={styles.header}>
            {menu.map((item) => (
                <NavLink className={styles.menu} key={item.to} to={item.to}>{item.title}</NavLink>
            ))}
        </div>
    );
};
