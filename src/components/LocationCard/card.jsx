import LocationCardStyle from "assets/styles/components/locationCard.module.scss"
import { Link } from "react-router-dom"

function Card(props){
    const slug = props.location.id;
    
    return(
        <Link 
        to={`appartement/${slug}`} 
        className={LocationCardStyle.Card}
        style={{
            backgroundImage: `url(${props.location.cover})`
          }}
        >
            <p>{props.location.title}</p>
        </Link>
    )
}
export default Card