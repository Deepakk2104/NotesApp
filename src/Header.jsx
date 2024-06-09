import React from 'react';

const Header = ({ handleToggle } ) => {
  return(
    <div className="header">
      <h1>Notes</h1>
        <button  onClick={()=> handleToggle((previousDarkMode)=> !previousDarkMode)} className="moon"><i class='bx bxs-moon'></i></button>
    </div>
  )
}
export default Header;