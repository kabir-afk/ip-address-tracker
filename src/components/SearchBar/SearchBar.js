import './SearchBar.css';

export default function SearchBar(props) {
  return (
    <div className='search-bar'>
      <input
        type="text"
        id="ipAddress-input"
        placeholder="Search for any IP address or domain"
        onChange={(e) => {
          props.handleData(e.target.value);
        }}
      />
      <button type="submit"><img src="/images/icon-arrow.svg" alt="arrow-icon" /></button>
    </div>
  );
}
