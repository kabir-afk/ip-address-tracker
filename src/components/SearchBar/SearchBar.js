export default function SearchBar(props) {
  return (
    <>
      <input
        type="text"
        id="ipAddress-input"
        placeholder="Search for any IP address or domain"
        onChange={(e) => {
          props.handleData(e.target.value);
        }}
      />
    </>
  );
}
