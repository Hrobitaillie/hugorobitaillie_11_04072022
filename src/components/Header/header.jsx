import { NavLink } from 'react-router-dom';
import logo from 'assets/img/Kasa_logo.svg';
import styleHeader  from 'assets/styles/components/header.module.scss';
import { Link } from 'react-router-dom';
import { menuItems } from 'assets/textDatas';

function Header() {

    menuItems.forEach((item) => {
        const slug = item.Name.replace(/\s+/g, '-').toLowerCase()
        slug.includes("accueil" ) ? item.Slug = "" : item.Slug = slug;
    });

    return (
        <div className={'content '+ styleHeader}>
            <div id={styleHeader.header}>
                <Link to={"/"} ><img src={logo} alt="" /></Link>
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
        </div>
    )
}

export default Header;