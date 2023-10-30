const FilterBar = ({ filter, onChangeFilter, onDeleteAllContacts }) => {
  return (
    <div>
      <input
        placeholder="Filter"
        type="text"
        value={filter}
        onChange={e => onChangeFilter(e.target.value)}
      ></input>
      <button onClick={onDeleteAllContacts}>Delete All contacts</button>
    </div>
  );
};

export default FilterBar;
