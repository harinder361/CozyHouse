import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import Posts from '../Components/Posts/Posts'
import Sidebar from '../Components/Sidebar/Sidebar'
import './Home.css'

const Home = () => {
  return (
    <>
    <Header/>
    <div className='home'>
        <Posts/>
        <Sidebar/>
    </div>
    <Footer/>
    </>
  )
}

export default Home
