import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState } from 'react';

export default function template(type, placeholder, setPlaceholder) {

  const handleInputChange = (e) => {
    setPlaceholder(e.target.value.slice(-1));
  };

  return (
    <div>
        <h1 className={styles.subtitle}>Kit of Parts</h1>
        <div className={styles.parts}>
          <textarea
            readOnly
            disabled="disabled"
            className={styles.element}
            placeholder={type}
          ></textarea>
        </div>
        <div className={styles.type}>
          <div className={styles.typeLeft}>
            <h1 className={styles.subtitle}>Type Here: <strong><u>{type}</u></strong></h1> 
            <textarea 
            onChange={handleInputChange} // Attach the change handler
            className={styles.element1}>
            </textarea>
          </div>
          <div className={styles.typeRight}>
            <h1 className={styles.subtitle}>Canvas</h1>
            <textarea 
              readOnly
              disabled="disabled"
              className={styles.element2}
              placeholder={placeholder}> 
            </textarea>
          </div>
        </div>
    </div>
  );
}
