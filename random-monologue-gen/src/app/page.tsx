// page.tsx
"use client"; // Mark this file as a Client Component

import styles from './page.module.css';

export default function Home() {
  // List of websites to redirect to
  const websites = [
    "https://www.google.com",
    "https://www.wikipedia.org",
    "https://www.github.com",
    "https://www.stackoverflow.com",
    // Add more websites here
  ];

  // Function to handle button click
  const handleClick = () => {
    // Generate a random index to select a website
    const randomIndex = Math.floor(Math.random() * websites.length);
    const randomWebsite = websites[randomIndex];
    // Open the selected website in a new tab
    window.open(randomWebsite, '_blank'); // '_blank' opens in a new tab
  };

  return (
    <div className={styles.container}>
      <button className={styles.myButton} onClick={handleClick}>
        New Monologue
      </button>
    </div>
  );
}
