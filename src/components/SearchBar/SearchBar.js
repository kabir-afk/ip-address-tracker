export default function SearchBar(props) {
  return (
    <>
      <input
        type="text"
        id="ipAddress-input"
        onChange={(e) => {
          props.handleData(e.target.value);
        }}
      />
    </>
  );
}
