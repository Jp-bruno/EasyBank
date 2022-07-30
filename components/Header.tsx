import Logo from "./Logo";
import Menu from "./Menu";
import RequestInviteButton from "./RequestInviteButton";
import styles from '../styles/Header.module.scss';


export default function Header() {
    return (
        <header className={styles.header}>
            <Logo />
            <Menu />
            <RequestInviteButton />
        </header>
    )
}