import './AllPets.css'
import {petList} from '../Assets/petList.js';
import Post from '../Components/Post/Post';
import Footer from '../Components/Footer/Footer'

const AllPets = () => {
  return (
    <>
    <div className='allPets'>
        {petList.map((pet) => {
            return <Post name={pet.name} description={pet.description} petID={pet.petID} image={".."+pet.image}/>
        })}
      
    </div>
    <Footer/>
    </>
  )
}

export default AllPets;
