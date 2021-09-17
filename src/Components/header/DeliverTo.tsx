import { LocationOn } from '@mui/icons-material';

interface DeliverToProps {
  location?: string;
}

export const DeliverTo = ({ location }: DeliverToProps): JSX.Element => (
  <div className="deliver">
    <div>
      <p className="deliver__title">Deliver to</p>
      <LocationOn style={{ color: 'white' }} />
      <strong className="deliver__country">{location}</strong>
    </div>
  </div>
);

DeliverTo.defaultProps = {
  location: 'Israel',
};
