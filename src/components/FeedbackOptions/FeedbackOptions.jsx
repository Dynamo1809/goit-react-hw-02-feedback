import styles from './FeedbackOptions.module.scss';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const optionsKeys = Object.keys(options); 
  return optionsKeys.map( (option, ind) => (
      <button className={styles.FeedbackOptions__button} value={option} key={option} type="button" onClick={onLeaveFeedback}>{option}</button>
    )
  )  
};
