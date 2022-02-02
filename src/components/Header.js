import react from "react";

function Header({ isDarkMode, onDarkModeClick }) {
    // function onDarkModeClick() {
    //     handleDarkModeClick
    // }

    return (
      <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header>
    )
  }

  export default Header;