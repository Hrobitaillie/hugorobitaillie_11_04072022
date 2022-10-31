import { Accordion } from "./accordion"
import AccordionStyle from "assets/styles/components/accordion.module.scss"
import classNames from "classnames"

function AboutAccordions( { data } ){
    return(
        <div className={classNames(AccordionStyle.accordionsContainer,AccordionStyle.accordionsAboutContainer)}>
            {/* itération sur le nombre de dropdown souhaité et appel du coposant pour construire le dropdown */}
            {data.map( (item,index) => (
                <Accordion key={index} data={item} defaultState="Close"/>
            ))}
        </div>
    )
}

export default AboutAccordions