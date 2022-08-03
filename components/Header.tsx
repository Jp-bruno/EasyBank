import Logo from "./Logo";
import Menu from "./Menu";
import RequestInviteButton from "./RequestInviteButton";
import MobileMenuButton from "./MobileMenuButton";
import styles from '../styles/Header.module.scss';
import { useState } from "react";

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);

    function toggleMobileMenu() {
        setMobileOpen(!mobileOpen);
    }

    return (
        <header className={styles.header}>
            <Logo dark />
            <Menu mobileOpen={mobileOpen} />
            <RequestInviteButton onHeader={true}/>
            <MobileMenuButton mobileOpen={mobileOpen} toggleMobileMenu={toggleMobileMenu} />
        </header>
    )
}