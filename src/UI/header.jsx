


import { Link } from 'react-router-dom';
import Username from '../Features/User/username'; 

import SearchOrder from '../Features/Order/SearchOrder';

function Header() {
  return (
    <header className=' flex items-center justify-between bg-blue-500 uppercase py-3 px-4 border-b border-stone-200 sm:px-6 '>
      <Link to="/" className='uppercase tracking-widest'>Fast React Co. UK</Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
