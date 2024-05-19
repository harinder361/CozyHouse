import './AllPets.css'
// import {petList} from '../Assets/petList.js';
import Post from '../Components/Post/Post';
import Footer from '../Components/Footer/Footer'
import { useEffect, useState } from 'react';
import axios from 'axios';

const AllPets = () => {

  const [petList, setPetList] = useState([]);
  const [petsToShow, setPetsToShow] = useState([]);
  const [category, setCategory] = useState("all");

  const updatePets = (updatedCategory) => {
    updatedCategory = updatedCategory.toLowerCase();
    if(updatedCategory == 'cats'){
      const temp = petList.filter(pet => (pet.animal.toLowerCase() == 'cat'));
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
      const temp = petList.filter(pet => (pet.animal.toLowerCase() == 'dog'));
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
    const fetchPets = async ()=>{
      const res = await axios.get("/api/posts");
      setPetList(res.data);
    }
    fetchPets();
  }, [])

  useEffect(() => {
    updatePets(category);
  }, [category, petList]);



  return (
    <>
    <div className="categories">
      <button onClick={() => {setCategory("all")}} className="all categoryButton btn activeButton">All</button>
      <button onClick={() => {setCategory("dogs")}} className="dogs categoryButton btn">Dogs</button>
      <button onClick={() => {setCategory("cats")}} className="cats categoryButton btn">Cats</button>
    </div>
    <div className='allPets'>
        {!petsToShow ?  <h1>No Pets to Show</h1> : petsToShow.map((pet) => {
            return <Post pet={pet}/>
        })}
      
    </div>
    <Footer/>
    </>
  )
}

export default AllPets;
