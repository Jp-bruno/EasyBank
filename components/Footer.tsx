import Logo from "./Logo";
import RequestInviteButton from "./RequestInviteButton";
import styles from '../styles/Footer.module.scss';
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    const socialMediaIcons = [
        '/images/icons/icon-facebook.svg',
        '/images/icons/icon-youtube.svg',
        '/images/icons/icon-twitter.svg',
        '/images/icons/icon-pinterest.svg',
        '/images/icons/icon-instagram.svg'
    ]

    return (
        <footer className={styles.footer}>
            <ul className={styles.footerMainUl}>
                <li className={styles.footerListItem}>
                    <Logo />
                    <ul className={styles.socialMediaList}>
                        {
                            socialMediaIcons.map(item => <Image src={item} alt="social media" layout='fixed' width={20} height={20} key={Math.random() * 9289} />)
                        }
                    </ul>
                </li>

                <li className={styles.footerListItem}>
                    <ul>
                        <li>
                            <Link href="/">About Us</Link>
                        </li>
                        <li>
                            <Link href="/">Contact</Link>
                        </li>
                        <li>
                            <Link href="/">Blog</Link>
                        </li>
                    </ul>
                </li>

                <li className={styles.footerListItem}>
                    <ul>
                        <li>
                            <Link href="/">Careers</Link>
                        </li>
                        <li>
                            <Link href="/">Support</Link>
                        </li>
                        <li>
                            <Link href="/">Privacy Policy</Link>
                        </li>
                    </ul>
                </li>
            </ul>

            <div className={styles.footerLastDiv}>
                <RequestInviteButton />
                <small>&#169; Easybank. All Rights Reserved</small>
            </div>
        </footer>
    )
}