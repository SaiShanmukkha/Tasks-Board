import navStyle from '../styles/NavBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faBars,
  faArrowRotateRight,
  faRotate,
  faGear,
  faCheckCircle
} from "@fortawesome/free-solid-svg-icons";


export default function NavigationBar() {
    return (
        <>
      <div className={navStyle.Navbar}>

        <div className={navStyle.NavbarTitle}>
          <FontAwesomeIcon icon={faBars} className={navStyle.MenuIcon} />
          <div className={navStyle.mainTitle}>
            <img
              src="./assets/images/logo.png"
              width={"35px"}
              height={"35px"}
            />
            <h3>TasksBoard</h3>
          </div>
        </div>

        <div className={navStyle.NavbarSearch}>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className={navStyle.SearchIcon}
            />
          <input
            type={"text"}
            className={navStyle.Search}
            placeholder="Search Items"
            maxLength={50}
          />
          <div className={navStyle.loader}></div>
        </div>

        <div className={navStyle.NavbarOptions}>
          <FontAwesomeIcon icon={faRotate} className={navStyle.OptionIcon} />
          <FontAwesomeIcon
            icon={faArrowRotateRight}
            className={navStyle.OptionIcon}
            />
          <FontAwesomeIcon icon={faGear} className={navStyle.OptionIcon} />
        </div>

        <div className={navStyle.accountProfile}></div>
      </div>
    </>
    );
}

