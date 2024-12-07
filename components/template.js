import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState } from 'react';

export default function template(type, name, placeholder, setPlaceholder) {

  const handleInputChange = (e) => {
    let val = e.target.value.slice(-1); 
    setPlaceholder(val); 
  };

  const handleKeyDown = (e) => {

    const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown']; // Add arrow keys

    if (type === "duckie"){
      const allowedChars = ['d', 'u', 'c', 'k', 'i', 'e'];
      if (!allowedChars.includes(e.key.toLowerCase()) && !allowedKeys.includes(e.key)) {
        e.preventDefault(); // Prevent typing of invalid keys
      }
    }else{
      const allowedChars = ['f', 'r', 'o', 'g'];
      if (!allowedChars.includes(e.key.toLowerCase()) && !allowedKeys.includes(e.key)) {
        e.preventDefault(); // Prevent typing of invalid keys
      }
    }
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
            <h1 className={styles.subtitle}>Type Here: <strong><u>{name}</u></strong></h1> 
            <textarea 
            onChange={handleInputChange} // Attach the change handler
            onKeyDown={handleKeyDown}
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
