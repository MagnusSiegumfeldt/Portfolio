import React from "react";
import menu from "../../assets/data/menu.json"
import MenuItem from './MenuItem'
import { Close } from '@mui/icons-material';

const MobileMenu = (props) => {
    return (
        <div className={"mobile-menu-container" + (props.open ? " open" : "")} onClick={(e) => e.stopPropagation()}>
            <div className="mobile-menu-header menu-item"><div className="mobile-menu-img"></div><div>Magnus Siegumfeldt</div><div className="mobile-menu-close-icon" onClick={props.closeMobileMenu}><Close/></div></div>
            {
                
                menu.menu.map((elem, idx) => (
                    <MenuItem className="mobile-menu-item" key={idx} content={elem.content} id={elem.id} active={props.active === elem.id} highlight={ true && elem.highlight} />
                ))
            }
            <MenuItem className="mobile-menu-item" content="Contact" id="" active={false} highlight={ true } openContact={props.openContact} />
        </div>
    )    
}

export default MobileMenu;






