import { useParams } from 'react-router-dom'
import LocationHero from 'components/LocationPage/locationHero';
import LocationAccordions from 'components/Accordions/locationAccordions';
import Slider from 'components/Slider/Slider';
import { useEffect } from 'react';
import { useState } from 'react';
import Loader from 'components/Loader/Loader';
import Error from 'pages/Error/error';

function Location() {

const [locationData, setLocationData] = useState();
const [isDataLoading, setDataLoading] = useState(true)
const [error, setError] = useState()

// récupération de l'id présent dans l'url
const { id } = useParams();


useEffect(() => {
  // récupération de la liste des logements
    fetch(`/assets/list.json`, {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then((response) => response.json())
    .then(( list ) => {
      try{
        // on essaie de trouver un logement qui correspond a l'id récupéré.
        const findData = list.find(elem =>{
          return elem.id === id
        })
        // si un logement est trouvé alors on sauvegarde les données
        if (findData) {
          setLocationData(findData)
        }else{
          //sinon on créé une erreur
          throw new SyntaxError("Can't Find Location");
        }
      }catch(error){
        //si on ne parvient pas a trouver un logements qui correspond on sauvegarde l'erreur
        setError(error)
      }
    })
    // Si on a trouvé un logement qui correspond a l'id, alors change l'état de chargement des données
    .then(() => setDataLoading(false))
  //si on ne parvient pas a récupérer la liste des logements on sauvegarde l'erreur
  .catch((error)=>{setError(error)})
  }, [])


  if (error) {
    return(
      <div className="content">
        <Error type="page"/>
      </div>
    )
  }else if (isDataLoading) {
    return(
      <div className="content">
        <Loader/>
      </div>
    )
  }else{
    return(
      <div className="content">
        <Slider props={ locationData }/>
        <LocationHero props={ locationData } />
        <LocationAccordions props={ locationData }/>
      </div>  
    )
  }

}

export default Location
