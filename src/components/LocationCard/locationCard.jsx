import Card from "./card";
import LocationCardStyle from "assets/styles/components/locationCard.module.scss"



function LocationCard( { Data } ){
    const locationList = Data
    
    return (
        <div className={LocationCardStyle.CardContainer} >
            {
                locationList.map((location) => (
                    <Card 
                        key={location.id}
                        location={location}
                    />
                ))
            }
        </div>
    )
}
export default LocationCard;