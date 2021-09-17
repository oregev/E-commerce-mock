import './alert.css';

interface AlertProps {
  text: string;
}

export const Alert = ({ text }: AlertProps): JSX.Element => (
  <div className="alert">
    <span>{text}</span>
  </div>
);
