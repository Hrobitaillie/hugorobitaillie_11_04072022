import { Accordion } from "./accordion"
import AccordionStyle from "assets/styles/components/accordion.module.scss"

function LocationAccordions( { props } ){
    let description = {
        title : "Description",
        data : props.description
    }
    let equipements = {
        title : "Equipements",
        data : props.equipments
    }
    return(
        <div className={AccordionStyle.accordionsContainer}>
            <Accordion data= { description } defaultState="Close"/>
            <Accordion data= { equipements } defaultState="Close"/>
        </div>
    )
}

export default LocationAccordions