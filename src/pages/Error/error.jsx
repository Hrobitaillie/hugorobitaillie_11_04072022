import ErrorStyle from "assets/styles/pages/error.module.scss"
import { errorPage } from "assets/textDatas"
import { Link } from "react-router-dom";


function Error( {type} ) {
  return (
    <div className="content">
        <div className={ErrorStyle.ErrorContainer}>
            <p className={ErrorStyle.ErrorTitle}>{errorPage.Title}</p>
            <p className={ErrorStyle.ErrorBaseline}>
                {
                    type === "content" ? (errorPage.errorType.content):(errorPage.errorType.page)
                }
                </p>
            <Link to="/" className={ErrorStyle.ErrorLink}>Retournez sur la page d'accueil</Link>
        </div>
    </div>  
    )
}

export default Error
    