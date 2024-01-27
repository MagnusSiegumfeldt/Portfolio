import React from "react";
import { Menu } from '@mui/icons-material';



const MobileHeader = (props) => {
    return (
        <div className="mobile-header" onClick={props.openMobileMenu}><Menu/></div>
    ); 
} 
  
export default MobileHeader;




