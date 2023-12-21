// components/LoadingComponent.js
import React from 'react';
import styles from './Loading.module.scss'; // Import your CSS or style module

export const Loading = ({ /* props here */ }) => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.spinner}></div>
      <p>Loading...</p>
    </div>
  );
};

