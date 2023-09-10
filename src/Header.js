import logo from "./assets/investment-calculator-logo.png";
import styles1 from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles1.header}>
      <img src={logo} alt="logo" />
      <h1>Investment Calculator</h1>
    </header>
  );
};
export default Header;
