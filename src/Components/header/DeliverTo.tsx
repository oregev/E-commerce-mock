import { LocationOn } from '@material-ui/icons';

interface DeliverToProps {
  location?: string;
}

export const DeliverTo = ({ location }: DeliverToProps) => (
  <div className="deliver">
    <p className="deliver__title">Deliver to</p>
    <LocationOn style={{ color: 'white' }} />
    <strong className="deliver__country">{location}</strong>
  </div>
);

DeliverTo.defaultProps = {
  location: 'Israel',
};
