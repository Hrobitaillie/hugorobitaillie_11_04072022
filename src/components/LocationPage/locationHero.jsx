import classNames from 'classnames';
import LocationHeroStyle from 'assets/styles/components/locationHero.module.scss'
import Rating from './rating';


function LocationHero(props){
    const LocationData = props.props;
    
    return(
        <div className={classNames("row",LocationHeroStyle.row)}>
            <div className="col">
                <h1 className={LocationHeroStyle.h1}>
                    {LocationData.title}
                </h1>
                <h3 className={LocationHeroStyle.h3}>
                    {LocationData.location}
                </h3>
                <ul className={LocationHeroStyle.tags}>
                    {
                        LocationData.tags.map((tag,index) => (
                            <li key={tag + '-' + index}> {tag}</li>
                        ))
                    }
                </ul>
            </div>
            <div className={LocationHeroStyle.colStar}>
                    <div className={LocationHeroStyle.userInfo}>
                        <p>
                            {LocationData.host.name}
                        </p>
                        <img src={LocationData.host.picture} alt="" />
                    </div>
                    <Rating RateValue= {LocationData.rating} />
            </div>
        </div>
    )
}

export default LocationHero