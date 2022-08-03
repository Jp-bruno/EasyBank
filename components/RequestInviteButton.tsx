import styles from '../styles/RequestInviteButton.module.css';

export default function RequestInviteButton({onHeader}:any) {
    return <button className={`${styles.button} ${onHeader ? styles.onHeader : ''}`}>Request Invite</button>
}