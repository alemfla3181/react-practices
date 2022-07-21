import React from 'react'
import styles from './assets/css/styles.css'

const Card = ({ title, description }) => {
  return (
    <div className={styles.Card}>
      <div className={styles.Card__Title}>{title}</div>
      <div className={styles.Card__Details}>{description}</div>
    </div>
  )
}

export default Card