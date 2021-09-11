// Tools
import { v4 as uuidv4 } from 'uuid';
// Assets
import { StarIcon } from '../../Assets/icons/StarIcon';
// Styles
import './rating.css';

interface IProps {
  rating?: number;
}

export const Rating = ({ rating }: IProps): JSX.Element => {
  const renderStars = [...Array(rating)].map(() => <StarIcon key={uuidv4()} />);

  return <div className="rating">{renderStars}</div>;
};

Rating.defaultProps = {
  rating: 5,
};
