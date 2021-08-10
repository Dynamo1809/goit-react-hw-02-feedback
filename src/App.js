import React, { Component, Fragment } from 'react';
// Components //
import { Section } from './components/Section';
import Statistics from './components/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleCLick = (e) => {
    const {value} = e.currentTarget;
    this.setState( prevState => { return { [value]: prevState[value] + 1 }} )
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad ;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const integerPercentage = Math.round(good * 100 / this.countTotalFeedback());
    return integerPercentage;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Fragment>
        <Section title="Please leave feedback">
          <FeedbackOptions options={this.state} onLeaveFeedback={this.handleCLick} />
        </Section>

        <Section title="Statistics">
          <Statistics 
            good={good} 
            neutral={neutral} 
            bad={bad} 
            total={this.countTotalFeedback} 
            positivePercentage={this.countPositiveFeedbackPercentage} >
          </Statistics>
        </Section>      
      </Fragment>
      
    )
  };   
};

export default App;
