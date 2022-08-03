import Logo from "./Logo";
import Menu from "./Menu";
import RequestInviteButton from "./RequestInviteButton";
import MobileMenuButton from "./MobileMenuButton";
import styles from '../styles/Header.module.scss';
import useWindowSize from "../hooks/useWindowSize";
import { useState } from "react";

export default function Header() {
    const windowSize = useWindowSize();
    const [mobileOpen, setMobileOpen] = useState(false);
    
    function toggleMobileMenu() {
        setMobileOpen(!mobileOpen);
    }

    return (
        <header className={styles.header}>
            <Logo dark />
            <Menu mobileOpen={mobileOpen}/>
            {
                windowSize > 900 ? <RequestInviteButton /> : <MobileMenuButton mobileOpen={mobileOpen} toggleMobileMenu={toggleMobileMenu}/>
            }
        </header>
    )
}