import Banner from 'components/Banner/banner'
import LocationCard from 'components/LocationCard/locationCard'
import BannerStyle from 'assets/styles/components/banner.module.scss'
import { useEffect, useState } from 'react'
import Loader from 'components/Loader/Loader'
import Error from 'pages/Error/error'


let title = "Chez vous, partout et ailleurs"

function Home() {

  const [locationList, setlocationList] = useState(null)
  const [isDataLoading, setDataLoading] = useState(true)
  const [error, setError] = useState()

   /*
      Récupération de la liste des appartements en location, s'il y a une erreur alors 
   */
    useEffect(() => {
        fetch(`./assets/list.json`, {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
          })
            .then((response) => response.json())
            .then(( list ) => setlocationList(list))
            .then(( ) => setDataLoading(false))
            .catch((error) => setError(error))
    }, [])

  return (
    <div className="content">
      {
        !error ? (
          !isDataLoading ? (
            <>
              <div className={BannerStyle.bannerContainer}>
                <Banner title={title} pageName="home" />
              </div>
              <LocationCard Data={ locationList }/>
            </>
          ) :(
            <Loader/>
          )
        ):(
          <Error type="content"/>
        )
      }
      
    </div>  
    )
}

export default Home
