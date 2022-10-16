import Banner from 'components/Banner/banner'
import LocationCard from 'components/LocationCard/locationCard'
import BannerStyle from 'assets/styles/components/banner.module.scss'
import LoaderStyle from 'assets/styles/components/spinningLoader.module.scss'
import { useEffect, useState } from 'react'


let title = "Chez vous, partout et ailleurs"

function Home() {

  const [locationList, setlocationList] = useState(null)
  const [isDataLoading, setDataLoading] = useState(true)

    useEffect(() => {
        fetch(`/assets/list.json`, {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
          })
            .then((response) => response.json())
            .then(( list ) => setlocationList(list))
            .then(( ) => setDataLoading(false))
            .catch((error) => console.log(error))
    }, [])

  return (
    <div className="content">
      <div className={BannerStyle.bannerContainer}>
        <Banner title={title} pageName="home" />
      </div>

      {
        isDataLoading ? (
          <div>
            <p className={LoaderStyle.advert}>Données en cours de chargement</p>
            <div className={LoaderStyle.ldsdefault}>
              <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
            </div>
          </div>
        ) : (
        <LocationCard Data={ locationList }/>
        )
      }
      
    </div>  
    )
}

export default Home
