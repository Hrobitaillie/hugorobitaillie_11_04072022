import RedStar from '../../assets/img/redstar.svg'
import GrayStar from '../../assets/img/graystar.svg'
import LocationHeroStyle from 'assets/styles/components/locationHero.module.scss'

function Rating(props){
    const RateValue = props.RateValue

    const Range = [1,2,3,4,5]
    const redStar =<img src={RedStar} alt='Etoile validée'/>
    const grayStar = <img src={GrayStar} alt='Etoile non validée'/>

    return(
        <div className={LocationHeroStyle.RatingContainer}>
            {
                Range.map((rangeElem) =>
                    RateValue >= rangeElem ? (<span key={rangeElem.toString()}>{redStar}</span>) : (<span key={rangeElem.toString()}>{grayStar}</span>) 
                )
            }
        </div>
    )
}
export default Rating