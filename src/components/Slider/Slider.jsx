import SliderStyle from 'assets/styles/components/slider.module.scss'
import { useState } from 'react'

export default function Slider({ props }) {
  const [slideState, setSlideState] = useState(0)
  const LocationData = props
  const pictures = LocationData.pictures


  // Récupération de l'évènement du clic
  function handleChange(operator) {
    //si cliqué sur suivant
    if (operator === '+') {
        slideState === pictures.length - 1
        // si la dernière image est affichée on passe a la première
        ? setSlideState(0)
        // sinon on passe a l'image suivante
        : setSlideState(slideState + 1)
    } else {
        // sinon, le clic est fait sur précédent
      slideState === 0
        // si la première image est affichée, on passe a la dernière
        ? setSlideState(pictures.length - 1)
        // sinon on passe à l'image précédente
        : setSlideState(slideState - 1)
    }
  }

  return (
    <div className={SliderStyle.locationslider}>
        {/* affichage de l'image du slider en fonction de l'index. */}
        <div
            style={{
            backgroundImage: `url(${pictures[slideState]})`,
            width: '100%',
            height: '100%',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            }}
        ></div>
      
      {/* Si le logement possède qu'une seule image, alors les controles du slider ne seront pas affichés */}
      {pictures.length > 1 && (
        <>
          <div className={SliderStyle.chevronSection}>
            <div
              className={
                SliderStyle.chevronContainer +
                ' ' +
                SliderStyle.chevronContainerLeft
              }
            //   au click, on déclanche la fonction de changement d'image
              onClick={() => {
                handleChange('-')
              }}
            >
              <img
                src="/assets/chevron-left.svg"
                alt=""
                className={SliderStyle.chevron}
              />
            </div>
            <div
              className={
                SliderStyle.chevronContainer +
                ' ' +
                SliderStyle.chevronContainerRight
              }
            //   au click, on déclanche la fonction de changement d'image
              onClick={() => {
                handleChange('+')
              }}
            >
              <img
                src="/assets/chevron-right.svg"
                alt=""
                className={SliderStyle.chevron}
              />
            </div>
          </div>
          <p className={SliderStyle.sliderPaging}>
            {slideState + 1}/{pictures.length}
          </p>
        </>
      )}
    </div>
  )
}
