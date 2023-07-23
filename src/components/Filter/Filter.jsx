import PropTypes from 'prop-types';
import { FilterLabel, FilterInput, WrapperFilter } from './Filter.styled';

export const Filter = ({ filter, onChange }) => {
  return (
    <WrapperFilter>
      <FilterLabel>
        Find contacts by name
        <FilterInput type="text" value={filter} onChange={onChange} />
      </FilterLabel>
    </WrapperFilter>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};