import Head from 'next/head';
import Image from 'next/image';

import config from '../config';
import styles from '../styles/Home.module.css';

function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>{config.siteTitle}</title>
        <link rel='icon' href={config.siteIcon} />
        <meta name='description' content={config.siteDescription} />
      </Head>

      <main className={styles.main}>
        <Image className={styles.me} src='/me.png' alt='Profile Picture' priority width={256} height={256} />
        <div className={styles.title}>{config.title}</div>
        <div className={styles.links}>
          {config.socialLinks.map(it => (
            <a key={it.title} className={styles.link} title={it.title} target='_blank' rel='noreferrer me' href={it.url}>
              <Image src={it.icon} alt={it.title} width={it.width || 28} height={it.height || 28} />
            </a>
          ))}
        </div>
        <div className={styles.divider} />
        <div className={styles.introduction}>
          {config.introductions.map((it, index) => <p key={index}>{it}</p>)}
        </div>
        <a className={styles.email} href='mailto:captainofphb@gmail.com'>
          <Image src='/send.svg' alt='send' width={18} height={18} />
          Email Me
        </a>
      </main>
    </div>
  );
};

export default Home;
