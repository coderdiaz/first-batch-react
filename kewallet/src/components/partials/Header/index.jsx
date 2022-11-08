import styles from './header.module.css'
import Logo from '../../Logo';
import Container from '../../Container';
import UserSwitch from '../../UserSwitch';

function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <Logo className={styles.logo} />
        <nav>
          <ul className={styles.nav}>
            <li>
              <a href="#">Share</a>
            </li>
            <li>
              <a href="#">Shopping</a>
            </li>
          </ul>
        </nav>
        <UserSwitch />
      </Container>
    </header>
  )
}

export default Header