import styles from '../styles/Navigation.module.scss';

type ListItemProps = {
    text: String
}

const pages = ['Home', 'About', 'Contact', 'Blog', 'Careers']

function ListItem({text}:ListItemProps) {
    return (
        <li className={styles.listItem}>
            <a href=''>
                {text}
            </a>
        </li>
    )
}

export default function Menu() {
    return (
        <nav>
            <ul>
                {
                    pages.map(item => <ListItem text={item} key={Math.random() * 2000} />)
                }
            </ul>
        </nav>
    )
}