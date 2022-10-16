import { Accordion } from "./accordion"
import AccordionStyle from "assets/styles/components/accordion.module.scss"
import classNames from "classnames"

function AboutAccordions( { data } ){
    const Data = data

    return(

        <div className={classNames(AccordionStyle.accordionsContainer,AccordionStyle.accordionsAboutContainer)}>
            {Data.map( (item,index) => (
                <Accordion key={index} data={item} defaultState="Close"> { item.data } </Accordion > 
            ))}

        </div>
    )
}

export default AboutAccordions