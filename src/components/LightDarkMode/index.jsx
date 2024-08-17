import React, { useState } from 'react';
import styles from "./LightDarkMode.module.scss";

function LightDarkMode() {
  const [mode, setMode] = useState({ bgMode: 'lightMode', btnText: 'Light Mode' })
  const toggleMode = () => {
    setMode(mode.bgMode === 'lightMode' ? { ...mode, bgMode: 'darkMode', btnText: 'Dark Mode' } : { ...mode, bgMode: 'lightMode', btnText: 'Light Mode' })
  }

  return (
    <div className={styles.appBg}>
      <div className={`${styles["appContent"]} ${styles[`${mode.bgMode}`]}`}>
        <h1>click to change mode</h1>
        <button type='button' onClick={toggleMode}>{mode.btnText}</button>
      </div>
    </div>
  )
}

export default LightDarkMode