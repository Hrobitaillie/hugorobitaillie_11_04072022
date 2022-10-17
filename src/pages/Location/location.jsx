import { useLocation } from 'react-router-dom'
import LocationHero from 'components/LocationPage/locationHero';
import LocationAccordions from 'components/Accordions/locationAccordions';
import Slider from 'components/Slider/Slider';

function Location() {
const location = useLocation().state
console.log(useLocation())
  return (
    <div className="content">
      <Slider props= { location }/>
      <LocationHero props= { location } />
      <LocationAccordions props= { location }/>

    </div>  
    )
}

export default Location
