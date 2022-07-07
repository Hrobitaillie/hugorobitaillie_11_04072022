import BannerStyle from 'assets/styles/components/banner.module.scss'

function Banner({title}){
    return (
        <div className={BannerStyle.banner}>
            {title === "" ? null : <h1> { title } </h1>}
        </div>
    )
}
export default Banner;