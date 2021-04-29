import PropTypes from "prop-types";
import Button from "./Button";

const Header = (props) => {
  const onClick = () => {
    console.log("Yo");
  };

  return (
    <header>
      <h1>TEST {"1" + " 2" + " 3" + " 4" + " 5 " + props.title}</h1>
      <Button onClick={onClick} text='run' />
    </header>
  );
};

Header.defaultProps = {
  title: "Test 5555",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
