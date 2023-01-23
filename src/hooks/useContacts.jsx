import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectIsLoading,
  selectError,
  selectFilter,
} from 'redux/selectors';

export const useContacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);

  return {
    isLoading,
    error,
    filter,
    contacts,
  };
};
