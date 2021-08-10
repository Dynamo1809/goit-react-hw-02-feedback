import styles from './Notification.module.scss';

const Notification = ({ message }) => {
  return message&& <h2 className={styles.Notification__title}>{message}</h2>
}

export default Notification;