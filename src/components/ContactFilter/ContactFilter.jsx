import { useSelector, useDispatch } from 'react-redux';
import {
  FilterContainer,
  FilterInput,
  FilterLabel,
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
    <FilterContainer>
      <FilterLabel htmlFor="nameFilterInput">Find contacts by name</FilterLabel>
      <FilterInput
        id="nameFilterInput"
        type="text"
        value={filter}
        onChange={handleFilterChange}
      />
    </FilterContainer>
  );
};
