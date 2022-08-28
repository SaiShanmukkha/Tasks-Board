import navStyle from '../styles/NavBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotate, faTrash } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image';


export default function NavigationBar() {
    return (
      <div className={navStyle.Navbar}>
        <div className={navStyle.navTitle}>
          <Image
            src="/assets/images/logo.jpg"
            width={"30px"}
            height={"30px"}
            style={{borderRadius: "50%"}}
          />
          <span className={navStyle.mainTitle}>Tasks Board</span>
        </div>
        <div className={navStyle.menuTrey}>
          {/* <FontAwesomeIcon icon={faRotate} className={navStyle.OptionIcon} />
          <FontAwesomeIcon icon={faTrash} className={navStyle.OptionIcon} />
          <FontAwesomeIcon icon={faRotate} className={navStyle.OptionIcon} /> */}
        </div>
      </div>
    );
}
