import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { changeFilter } from 'redux/filterSlice';
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from './ContactsFilter.styled';
import SearchIcon from '@mui/icons-material/Search';

export const ContactsFilter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Find contacts by name"
          inputProps={{ 'aria-label': 'search' }}
          id="filter"
          type="text"
          value={filter}
          onChange={handleChange}
        />
      </Search>
    </>
  );
};
