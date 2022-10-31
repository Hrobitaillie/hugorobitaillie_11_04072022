import AccordionStyle from "assets/styles/components/accordion.module.scss"
import classNames from "classnames";
import { useState } from "react";
import collapseIcon from "../../assets/img/collapse.svg"

export function Accordion({data , defaultState}){

    const name = data.title;
    const content = data.data;
    const [isClose, setIsClose] = useState(defaultState);

    const handleClick = (e) => {
        e.preventDefault();
        
        // au click on change l'état du dropdown ouver ou fermé
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
                {/* 
                    si le contenu du dropdown est un array/tableau alors, on itière sur les éléments pour les afficher sous forme de liste sur la page. 
                    sinon, afficher simplement le contenu du dropdown
                */}
                {
                    Array.isArray(content) ? (
                        <ul>
                            { content.map((equipment, index) => (
                                <li key={index}> {equipment} </li>
                            ))}
                        </ul>
                    ):(
                        content
                    )
                }
            </div>
        </div>
    )
}