export const Filter = ({ onFilter }) => {
  return (
    <>
      <label>
        Find contacts by name
        <input type="text" name="filter" onChange={e => onFilter(e)} />
      </label>
    </>
  );
};
