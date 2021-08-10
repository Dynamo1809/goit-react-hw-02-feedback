import styles from './Section.module.scss';

export const Section = ({ children, title }) => {
  return (
    <section className={styles.Section}>
      {title && 
        <h1>{title}</h1>
      }
      {children} 
    </section>
  )
}

