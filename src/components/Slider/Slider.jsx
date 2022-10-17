import { Navigation } from "swiper";
import { Swiper , SwiperSlide } from "swiper/react";
import 'swiper/css';
import "swiper/css/navigation";
import SliderStyle from 'assets/styles/components/slider.module.scss'


export default function Slider( { props } ){
    const LocationData = props;

    const isNavigation = () =>{
        if ( LocationData.pictures.length > 1) {
           return (
            [Navigation]
           )
        }else{
            return ""
        }
    }
    return(
        <Swiper
        tag="section"
        wrapperTag="ul"
        id="location-slider"
        navigation={LocationData.pictures.length > 1 && true} 
        // @ts-ignore
        modules={isNavigation()}
        simulateTouch={false}
        loop={true}
        className={SliderStyle.locationslider}
        >
            {LocationData.pictures.map((picture, i) => {
                return (
                <SwiperSlide key={`slide-${i}`}>
                    <div style={{
                        backgroundImage:`url(${picture})`,
                        width:"100%",
                        height:"100%",
                        backgroundPosition:"center",
                        backgroundSize:"cover"
                        }}>
                    </div>
                </SwiperSlide>)
            })}
        </Swiper>
    )
}