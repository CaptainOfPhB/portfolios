import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>CaptainOfPhB</title>
        <meta name='description' content='CaptainOfPhb profile' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <div className={styles.avatar}>
          <Image src='/avatar.svg' alt='me' width={256} height={256} />
        </div>
        <h1 className={styles.title}>CaptainOfPhB</h1>
        <p className={styles.description}>Focus on front-end development, currently in Shanghai, China.</p>
        <div className={styles.links}>
          <a className={styles.link} title='GitHub' target='_blank' rel='noreferrer' href='https://github.com/CaptainOfPhB'>
            <Image src='/github.svg' alt='github' width={32} height={32} />
          </a>
          <a className={styles.link} title='Blog' target='_blank' rel='noreferrer' href='https://daijiangtao.blog'>
            <Image src='/blog.svg' alt='blog' width={24} height={24} />
          </a>
          <a className={styles.link} title='resume' target='_blank' rel='noreferrer' onClick={() => alert('Sorry, resume is under constructing')}>
            <Image src='/resume.svg' alt='resume' width={26} height={26} />
          </a>
          <a className={styles.link} title='知乎' target='_blank' rel='noreferrer' href='https://www.zhihu.com/people/CaptainInPHW'>
            <Image src='/zhihu.svg' alt='知乎' width={28} height={28} />
          </a>
          <a className={styles.link} title='Twitter' target='_blank' rel='noreferrer' href='https://twitter.com/CaptainOfPhB'>
            <Image src='/twitter.svg' alt='twitter' width={28} height={28} />
          </a>
          <a className={styles.link} title='Phone' target='_blank' rel='noreferrer' href='tel:+8617349777173'>
            <Image src='/phone.svg' alt='phone' width={28} height={28} />
          </a>
          <a className={styles.link} title='WeChat' target='_blank' rel='noreferrer' href='https://pic1.zhimg.com/80/v2-b5de1adce0d79ec3bed787f9369db7d9_1440w.jpeg'>
            <Image src='/wechat.svg' alt='wechat' width={28} height={28} />
          </a>
        </div>
        <div className={styles.divider} />
        <div className={styles.introduction}>
          <p>
            I&apos;m CaptainOfPhB and my Chinese name is 戴江涛. My hometown is in Tianshui, Gansu province where I have lived for about 20 years. I worked for China Mobile company
            for one year and a half after graduating from XUT(Xi&apos;an University of Technology) in 2016. I quitted the job when I found I&apos;m really interested about the
            coding, so I found my first front-end development job in 2018 at Shanghai after learning the front-end development for about a half year.
          </p>
          <p>
            At present, I have 4 years of experience and have been developing with React.js for over 3 years. I&apos;ve been developing backend management systems for most of my
            work. I try to keep my code clean and simple, and I&apos;m always trying to find a better way to solve problems.
          </p>
          <p>
            I like to traveling by self-driving with my friends outside of work, and sometime I would like to cooking at home. Also, I have two lovely cats who have been with
            me for three years.
          </p>
          <p>I try to learn English and some new techniques in my spare time. I would appreciate it if you could teach me anything new to me. Feel free to contact me.</p>
          <p>Looking forward to your mail.</p>
        </div>
        <a className={styles.email} href='mailto:captainofphb@gmail.com'>
          <Image src='/send.svg' alt='send' width={28} height={28} />
          Email Me
        </a>
      </main>

      <footer className={styles.footer}>
        <div className={styles.item}>
          Powered by{' '}
          <a href='https://nextjs.org' target='_blank' rel='noopener noreferrer'>
            <span className={styles.logo}>
              <Image src='/nextjs.svg' alt='Next Logo' width={72} height={16} />
            </span>
          </a>
        </div>
        <div className={styles.item}>
          Hosted on{' '}
          <span className={styles.logo}>
            <Image src='/vercel.svg' alt='Vercel' width={72} height={16} />
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Home;
