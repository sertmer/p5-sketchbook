import Image from 'next/image';
import backArrow from '../../public/003-rewind.png';
import forwardArrow from '../../public/004-fast-forward.png';

const NavBar = () => {
  return (
    <nav>
      <Image
      src={backArrow}
      width={100}
      height={100}
      alt="back arrow"
    />
    <Image
      src={forwardArrow}
      width={100}
      height={100}
      alt="forward arrow"
    />
    </nav>
  )
}

export default NavBar;