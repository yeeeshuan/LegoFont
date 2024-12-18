import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState } from 'react';

import template from '../components/template';



export default function Home() {
  const [placeholder, setPlaceholder] = useState(''); // State to hold the placeholder value
  const [duckie, setDuckie] = useState(true); // State to hold the placeholder value

  const click = (bool) => {
    setDuckie(bool)
    setPlaceholder(''); 
  }

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

      <nav className={styles.nav}>
        <button 
        className={duckie ? styles.btnClicked : styles.btn}
        onClick={() => click(true)}>duckie</button>
        <button 
        className={!duckie ? styles.btnClicked : styles.btn}
        onClick={() => click(false)}>frog</button>
      </nav>

        {duckie? template("duckie", "duckie", placeholder, setPlaceholder) : 
        template("zfraoge", "frog", placeholder, setPlaceholder)}
      </main>
    </div>
  );
}
