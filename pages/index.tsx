import type { NextPage } from 'next';
import RequestInviteButton from '../components/RequestInviteButton';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <section className={styles.firstPanel}>
        <div className={styles.textDiv}>
          <h1>
            Next generation <br /> digital banking
          </h1>

          <p>
            Take your financial life online.
            Your Easybank account will be a one-stop-shoop for spending, saving, budgeting, investing, and much more
          </p>

          <RequestInviteButton />
        </div>
      </section>

      <section className={styles.secondPanel}>
        <h1>
          Why choose Easybank?
        </h1>

        <p>
          We leverage Open Banking to turn your bank account into your
          financial hub. Control your finances like never before.
        </p>
      </section>
    </div>
  )
}

export default Home
