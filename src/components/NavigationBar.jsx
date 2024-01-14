import navStyle from '@styles/NavBar.module.css';
import Image from 'next/image';
import Logo from "@assets/logo.jpg"

export default function NavigationBar() {
  return (
    <div className={navStyle.Navbar}>
      <div className={navStyle.navTitle}>
        <Image
          src={Logo}
          width={30}
          height={30}
          alt='Tasks-Board Icon'
          style={{borderRadius: "50%"}}
        />
        <h1 className={navStyle.mainTitle}>Tasks Board</h1>
      </div>
    </div>
  );
}
