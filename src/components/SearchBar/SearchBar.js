import "./SearchBar.css";
import { useState } from "react";
export default function SearchBar(props) {
  const [error, seterror] = useState({ errorMsg: "hide", border: "" });
  function search(e) {
    e.preventDefault();
    props.handleData(document.getElementById("ipAddress-input").value);
  }
  const validateIpaddress = (e) => {
    const ipPattern =
      /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    !ipPattern.test(e.target.value)
      ? seterror({ errorMsg: "unhide", border: "red" })
      : seterror({ errorMsg: "hide", border: "" });
  };
  return (
    <form onSubmit={search}>
      <div className="search-bar">
        <input
          type="text"
          id="ipAddress-input"
          placeholder="Search for any IP address or domain"
          onInput={validateIpaddress}
          className={error.border}
        />
        <button type="submit">
          <img src="images/icon-arrow.svg" alt="arrow-icon" />
        </button>
      </div>
      <div className={`validation-msg ${error.errorMsg}`}>
        Please provide valid IP Address
      </div>
    </form>
  );
}
