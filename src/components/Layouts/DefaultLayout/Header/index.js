import { memo } from 'react';
function Header() {
   console.log(1);
   return <h1>Header</h1>;
}

export default memo(Header);
