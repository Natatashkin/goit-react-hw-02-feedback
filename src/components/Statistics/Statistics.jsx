import { StatisticsList, StatisticsItem } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, totalFeeds, positivePercentage }) => {
  return (
    <StatisticsList>
      <StatisticsItem key="good">Good: {good}</StatisticsItem>
      <StatisticsItem key="neutral">neutral: {neutral}</StatisticsItem>
      <StatisticsItem key="bad">bad: {bad}</StatisticsItem>
      <StatisticsItem key="total">total: {totalFeeds}</StatisticsItem>
      <StatisticsItem key="percentage">
        Positive feedbacks: {positivePercentage}
      </StatisticsItem>
    </StatisticsList>
  );
};

export default Statistics;
