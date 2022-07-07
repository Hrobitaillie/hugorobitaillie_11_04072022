import Banner from 'components/Banner/banner'

let title = "Chez vous, partout et ailleurs"

function Home() {
  return (
    <div className="content">
      <Banner title={title}/>
    </div>
  )
}

export default Home
