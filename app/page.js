import Image from 'next/image';
import styles from './page.module.css';
export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="Care24 Logo" width={50} height={50} />
          <span>care24</span>
        </div>
        <div className={styles.contact}>
          <span>Call Us - 08069048802</span>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.heroSection}>
          <h1>
            Largest Home Healthcare Service Provider In <br />
            <span className={styles.highlight}>Mumbai & Delhi</span>
          </h1>
          <p>Your health & wellness, our priority: Experience personal care & support with Care24.</p>
          <button className={styles.callBackButton}>Request a call back</button>
          <div className={styles.reviews}>
            <Image src="/google.png" alt="Google" width={100} height={40} />
            <Image src="/justdial.png" alt="Justdial" width={100} height={40} />
          </div>
        </section>

        <section className={styles.servicesSection}>
          <h2>Hire our Verified Caregivers</h2>
          <p>Hire skilled and trusted caregivers from Care24 to provide best home healthcare for your loved ones.</p>
          <ul>
            <li>Oral hygiene and bed bath/sponge bath</li>
            <li>Cleanliness of patients' room</li>
            <li>Feeding and bathroom assistance</li>
            <li>Light massage (10-15 mins)</li>
          </ul>
          <button className={styles.bookButton}>Book now & save up to 20%!</button>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>Level up your home healthcare service with <span className={styles.highlight}>3 easy steps</span></p>
      </footer>
    </div>
  );
}
