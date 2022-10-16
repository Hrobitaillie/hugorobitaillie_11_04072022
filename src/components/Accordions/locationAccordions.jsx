import { Accordion, AccordionList } from "./accordion"
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

            <Accordion data= { description } defaultState="Close"> { description.data } </Accordion >
            
            <AccordionList data= { equipements } defaultState="Close"/>

        </div>
    )
}

export default LocationAccordions