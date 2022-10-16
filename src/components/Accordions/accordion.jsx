import AccordionStyle from "assets/styles/components/accordion.module.scss"
import classNames from "classnames";
import { useState } from "react";
import collapseIcon from "../../assets/img/collapse.svg"

export function Accordion({data , defaultState , children}){

    const name = data.title;
    const [isClose, setIsClose] = useState(defaultState);

    const handleClick = (e) => {
        e.preventDefault();
        
        let newState = isClose === "Open" ? "Close" : "Open"
        setIsClose(newState)
    }

    return(
        <div className={classNames(AccordionStyle.accordion,AccordionStyle['accordion' + isClose])}>
            <div className={AccordionStyle.accordionTitle}>
                <span> {name} </span>
                <img src={collapseIcon} alt="collapseIcon" onClick={handleClick} />
            </div>
            <div className={AccordionStyle.accordionContent}>
                {children}  
            </div>
        </div>
    )
}

export function AccordionList({data , defaultState}){

    let description = {
        title : data.title
    }

    const content = data.data;
    
    return(
        <Accordion data={description} defaultState= {defaultState} >
            <ul>
                { content.map((equipment, index) => (
                    <li key={index}> {equipment} </li>
                ))}
            </ul>
        </Accordion>
    )
}