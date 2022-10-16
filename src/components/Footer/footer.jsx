import FooterStyle  from 'assets/styles/components/footer.module.scss';
import logo from 'assets/img/Kasa_logo.svg';
import { copyright } from 'assets/textDatas';


function Footer(){
    return(
        <div className= {FooterStyle.footerContainer} >
            <img src={logo} alt="logo" />
            <p className={FooterStyle.copyright}> { copyright } </p>
        </div>
    )
}

export default Footer