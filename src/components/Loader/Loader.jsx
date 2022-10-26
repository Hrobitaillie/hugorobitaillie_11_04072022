import LoaderStyle from 'assets/styles/components/spinningLoader.module.scss'

export default function Loader(){
    return(
        <div>
            <p className={LoaderStyle.advert}>Données en cours de chargement</p>
            <div className={LoaderStyle.ldsdefault}>
              <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
            </div>
        </div>
    )
}