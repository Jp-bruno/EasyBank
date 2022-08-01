import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import RequestInviteButton from "../components/RequestInviteButton";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  const listContent_1 = [
    {
      icon: "/images/icons/icon-cards.svg",
      title: "Online Banking",
      text: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
    },
    {
      icon: "/images/icons/icon-budgeting.svg",
      title: "Simple Budgeting",
      text: "See exactly where your money goes each month. Receive notifications when you're close to hitting your limits."
    },
    {
      icon: "/images/icons/icon-onboarding.svg",
      title: "Fast Onboarding",
      text: "  We don't do branches. Open your account in minutes online and start taking control of your finances right away."
    },
    {
      icon: "/images/icons/icon-api.svg",
      title: "Open API",
      text: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
    },
  ]

  const listContent_2 = [
    {
      image: "/images/others/image-currency.jpg",
      author: "Claire Robinson",
      title: "Receive money in any currency with no fees",
      text: "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single ..."
    },
    {
      image: "/images/others/image-restaurant.jpg",
      author: "Wilson Hutton",
      title: "Treat yourself without worrying about money",
      text: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you ..."
    },
    {
      image: "/images/others/image-plane.jpg",
      author: "Wilson Hutton",
      title: "Take your Easybank card wherever you go",
      text: "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you"
    },
    {
      image: "/images/others/image-confetti.jpg",
      author: "Claire Robinson",
      title: "Our invite-only Beta accounts are now live!",
      text: "After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site ..."
    }
  ]


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
        <div className={styles.textDiv}>
          <h1>
            Why choose Easybank?
          </h1>

          <p>
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>

        <div>
          <ul>
            {
              listContent_1.map(item => {
                return (
                  <li key={Math.random() * 3000} className={styles.secondPanelListItem}>
                    <Image src={item.icon} alt={item.title} layout="fixed" width={65} height={65} />
                    <h2>{item.title}</h2>
                    <p>{item.text}</p>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </section>

      <section className={styles.thirdPanel}>
        <h1>Latest Articles</h1>

        <ul>
          {
            listContent_2.map(item => {
              return (
                <li key={Math.random() * 3000} className={styles.thirdPanelListItem}>
                  <Image src={item.image} alt={item.title} layout="responsive" width={'100%'} height={80} />
                  <small>By {item.author}</small>
                  <h2><Link href="/">{item.title}</Link></h2>
                  <p>{item.text}</p>
                </li>
              )
            })
          }
        </ul>
      </section>
    </div>
  )
}

export default Home
