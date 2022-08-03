import styles from '../styles/MobileMenuButton.module.scss'

export default function MobileMenuButton({mobileOpen, toggleMobileMenu}:any) {
    return <button className={`${styles.mobileMenuButton} ${mobileOpen ? styles.open : ''}`} onClick={toggleMobileMenu} />
}