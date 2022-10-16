
import Banner from 'components/Banner/banner'
import  { aboutAccordionsDatas }  from 'assets/textDatas'
import AboutAccordions from 'components/Accordions/aboutAccordions'
import BannerStyle from 'assets/styles/components/banner.module.scss'

let title = "";

function About() {
  return (
    <div className="content">
      <div className={BannerStyle.bannerContainer}>
        <Banner title={title} pageName="about" />
      </div>
      <AboutAccordions data= { aboutAccordionsDatas } />
    </div>
  )
}

export default About
