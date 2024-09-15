import PropTypes from 'prop-types';

const DisplayCount = ({ count }) => {
  return (
    <div>
      <h2>Valor do contador: {count}</h2>
    </div>
  );
};

DisplayCount.propTypes = {
  count: PropTypes.number.isRequired,
};

export default DisplayCount;
