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
        <p className={styles.description}>I&apos;m a front-end developer, currently in Shanghai, China.</p>
        <div className={styles.links}>
          <a className={styles.link} title='GitHub' target='_blank' rel='noreferrer' href='https://github.com/CaptainOfPhB'>
            <Image src='/github.svg' alt='github' width={32} height={32} />
          </a>
          <a className={styles.link} title='Blog' target='_blank' rel='noreferrer' href='https://daijiangtao.blog'>
            <Image src='/blog.svg' alt='blog' width={24} height={24} />
          </a>
          <a className={styles.link} title='resume' target='_blank' rel='noreferrer' href='/resume-page-is-under-construction'>
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
          <a className={styles.link} title='WeChat' target='_blank' rel='noreferrer' href='https://github.com/CaptainOfPhB'>
            <Image src='/wechat.svg' alt='wechat' width={28} height={28} />
          </a>
        </div>
        <div className={styles.divider} />
        <div className={styles.introduction}>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which
          look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there anything embarrassing hidden in the middle of text.
          All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary
          of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore
          always free from repetition, injected humour, or non-characteristic words etc.
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
