import React from "react";
import menu from "../../assets/data/menu.json"
import MenuItem from './MenuItem'

const Header = (props) => {
    return (
        <div className={"menu-container"} onClick={(e) => e.stopPropagation()}>
            {
                menu.menu.map((elem, idx) => (
                    <MenuItem className="menu-item" key={idx} content={elem.content} id={elem.id} active={props.active === elem.id} highlight={ false } />
                ))
            }
            <MenuItem className="menu-item" content="Contact" id="" active={false} highlight={ true } openContact={props.openContact} />
        </div>
        
    )
    
}

export default Header;





