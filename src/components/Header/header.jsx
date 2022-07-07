import { NavLink } from 'react-router-dom';
import logo from 'assets/img/Kasa_logo.svg';
import styleHeader  from 'assets/styles/components/header.module.scss';

function Header() {

    const menuItems = [
        {Name: "Accueil"},
        {Name: "A propos"}
    ]

    menuItems.forEach((item) => {
        const slug = item.Name.replace(/\s+/g, '-').toLowerCase()
        slug.includes("accueil" ) ? item.Slug = "" : item.Slug = slug;
    });

    return (
        <div id={styleHeader.header}>
            <img src={logo} alt="" />
            <nav>
                {menuItems.map((item, index) => {
                    return (
                        <NavLink 
                            key={`${item.Name}-${index}`} 
                            // className={`${styleHeader.navbar_item} `}
                            to={`/${item.Slug}`}
                            className={
                                ({ isActive }) => (isActive ? `${styleHeader.navbar_item} ${styleHeader.navbar_item_active} ` : `${styleHeader.navbar_item}`)
                            }
                        >
                            {item.Name}
                        </NavLink>    
                    )
                })}
            </nav>
        </div>
    )
}

export default Header