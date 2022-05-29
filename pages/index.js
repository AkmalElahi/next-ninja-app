import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head >
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in massa eget sapien vehicula vehicula. Etiam at laoreet massa. Quisque sed tortor rutrum, viverra nisi in, efficitur justo. In et massa nec orci lobortis consequat quis eget leo.</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in massa eget sapien vehicula vehicula. Etiam at laoreet massa. Quisque sed tortor rutrum, viverra nisi in, efficitur justo. In et massa nec orci lobortis consequat quis eget leo.</p>
      </div>
    </>
  )
}
