// Core
import { ChangeEvent, useState } from 'react';
// Material-UI
import Search from '@material-ui/icons/Search';
// Data
import { departments } from './departments';
// Styles
import './searchbar.css';

export const Searchbar: React.FC = (): JSX.Element => {
  const [choosenDepartment, setChoosenDepartment] = useState<string | null>(null);
  const handleSelect = (event: ChangeEvent<HTMLSelectElement>): void =>
    setChoosenDepartment(event.target.value);

  return (
    <div className="searchbar">
      <select className="searchbar__select" onChange={handleSelect}>
        {choosenDepartment && <option>{choosenDepartment}</option>}
        {departments.map((option, index) => (
          <option key={index.toString()}>{option}</option>
        ))}
      </select>
      <input className="searchbar__input" type="text" />
      <div className="searchbar__icon_container">
        <Search className="searchIcon" viewBox="0 0 22 22" />
      </div>
    </div>
  );
};
