export const Account: React.FC = (): JSX.Element => {
  const userName = 'Guest';
  return (
    <div className="account">
      <span className="account__title">{`Hello ${userName}`}</span>
      <span className="account__subtitle">Sign in</span>
    </div>
  );
};
