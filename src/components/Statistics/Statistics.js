import { Component } from 'react';
import s from './Statistics.module.css';

class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <ul className={s.statList}>
        <li className={s.statItem}>
          Good:
          <span className={s.statItemValue}>{good}</span>
        </li>
        <li className={s.statItem}>
          Neutral:
          <span className={s.statItemValue}>{neutral}</span>
        </li>
        <li className={s.statItem}>
          Bad:
          <span className={s.statItemValue}>{bad}</span>
        </li>
        <li className={s.statItem}>
          Total:
          <span className={s.statItemValue}>{total}</span>
        </li>
        <li className={s.statItem}>
          Positive Feedback:
          <span className={s.statItemValue}>{positivePercentage}%</span>
        </li>
      </ul>
    );
  }
}

export default Statistics;
