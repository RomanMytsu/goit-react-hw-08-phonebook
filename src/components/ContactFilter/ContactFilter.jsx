import { useSelector, useDispatch } from 'react-redux';
import {
  FilterInput,
  FilterLabel,
  Wrap,
} from './ContactFilter.styled';

import { updateFilter } from '../../redux/Filter/filterSlice';
import { selectFilter } from '../../redux/Filter/filter-selectors';

export const ContactFilter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(updateFilter(e.target.value));
  };

  return (
    <Wrap>
      <FilterLabel htmlFor="nameFilterInput">
        Find contacts by name
        <FilterInput
          id="nameFilterInput"
          type="text"
          value={filter}
          onChange={handleFilterChange}
        />
      </FilterLabel>
    </Wrap>
  );
};
