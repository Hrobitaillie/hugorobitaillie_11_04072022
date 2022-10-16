import LocationCardStyle from "assets/styles/components/locationCard.module.scss"
import { Link } from "react-router-dom"

function Card(props){
    const slug = props.location.id;
    // const { locationId } = useParams()
    return(
        <Link 
        to={`appartement/${slug}`} 
        className={LocationCardStyle.Card}
        style={{
            backgroundImage: `url(${props.location.cover})`
          }}
        state={props.location}
        >
            <p>{props.location.title}</p>
        </Link>
    )
}
export default Card