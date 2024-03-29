import BannerStyle from 'assets/styles/components/banner.module.scss'
import classNames from 'classnames';

function Banner(props){
    return (
        //creation d'une div avec une class principale "banner" et une classe secondaire associée a nom de la page
        // définitions par le css du background image en fonction de la classe scondaire
        <div className={
            classNames(
                BannerStyle.banner, 
                BannerStyle['banner_' + props.pageName],
            )}
        >
            {/* Si on transmet un props "title" alors on l'écrit dans un H1 */}
            {props.title && <h1> { props.title } </h1>}
        </div>
    )
}
export default Banner;
