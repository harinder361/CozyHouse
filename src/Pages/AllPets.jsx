import './AllPets.css'
import {petList} from '../Assets/petList.js';
import Post from '../Components/Post/Post';
import Footer from '../Components/Footer/Footer'
import { useEffect, useState } from 'react';

const AllPets = () => {
  const [petsToShow, setPetsToShow] = useState([]);
  const [category, setCategory] = useState("all");

  const updatePets = (updatedCategory) => {
    updatedCategory = updatedCategory.toLowerCase();
    if(updatedCategory == 'cats'){
      const temp = petList.filter(pet => (pet.animal == 'Cat'));
      setPetsToShow(temp);
      const buttons = document.querySelectorAll('.categoryButton');
      buttons.forEach((ele) => {ele.classList.remove("activeButton")});
      buttons.forEach((ele) => {
        if(ele.classList.contains("cats")){
          ele.classList.add("activeButton");
        }
      })
    }
    else if(updatedCategory == 'dogs'){
      const temp = petList.filter(pet => (pet.animal == 'Dog'));
      setPetsToShow(temp);
      const buttons = document.querySelectorAll('.categoryButton');
      buttons.forEach((ele) => {ele.classList.remove("activeButton")});
      buttons.forEach((ele) => {
        if(ele.classList.contains("dogs")){
          ele.classList.add("activeButton");
        }
      })
    }
    else{
      setPetsToShow(petList);
      const buttons = document.querySelectorAll('.categoryButton');
      buttons.forEach((ele) => {ele.classList.remove("activeButton")});
      buttons.forEach((ele) => {
        if(ele.classList.contains("all")){
          ele.classList.add("activeButton");
        }
      })
    }
  }

  useEffect(() => {
    updatePets(category);
  }, [category]);



  return (
    <>
    <div className="categories">
      <button onClick={() => {setCategory("all")}} className="all categoryButton btn activeButton">All</button>
      <button onClick={() => {setCategory("dogs")}} className="dogs categoryButton btn">Dogs</button>
      <button onClick={() => {setCategory("cats")}} className="cats categoryButton btn">Cats</button>
    </div>
    <div className='allPets'>
        {!petsToShow ?  <h1>No Pets to Show</h1> : petsToShow.map((pet) => {
            return <Post name={pet.name} description={pet.description} petID={pet.petID} image={".."+pet.image}/>
        })}
      
    </div>
    <Footer/>
    </>
  )
}

export default AllPets;
