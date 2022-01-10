import { Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className="feedback-controls">
      {options.map(option => (
        <Button type="button" key={option} onClick={onLeaveFeedback}>
          {option}
        </Button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
