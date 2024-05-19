import './Write.css'
import headerImage from '../Assets/headerImage.jpg'
// import {petList} from '../Assets/petList';
import { useState } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import {Context} from '../context/Context'

const Write = () => {
  const [name, setName] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");
  const {user} = useContext(Context)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      name,
      animal,
      breed,
      age,
      description,
      imageURL
    }
    const res = await axios.post("/api/posts", newPost);
    window.location.replace("/pets/"+res.data._id)
  }

  return (
    <div className='write'>
        <img src={headerImage} alt="" className="writeImg" />
        <form action="" className="writeForm" onSubmit={handleSubmit}>
            <div className="writeFormGroup">
                {/* <label htmlFor="fileInput"><i class="writeIcon fa-solid fa-plus"></i></label>
                <input type="file" name="fileInput" id="fileInput" style={{display: 'none'}} /> */}
                <input type="text" placeholder='Name' id="name" className='writeInput' autoFocus={true} onChange={(e) => {setName(e.target.value)}}/>
            </div>
            <div style={{display:"flex"}}>
            <div className="writeFormGroup">
              <input type="text" placeholder='ImageURL' id="imageURL" className="writeInput" style={{fontSize: "20px"}} onChange={(e) => {setImageURL(e.target.value)}}/>
            </div>

            <div className="writeFormGroup">
              <input type="text" placeholder='Breed' id="breed" className="writeInput" style={{fontSize: "20px"}} onChange={(e) => {setBreed(e.target.value)}}/>
            </div>
            <div className="writeFormGroup">
              <input type="text" placeholder='Animal' id="animal" className="writeInput" style={{fontSize: "20px"}} onChange={(e) => {setAnimal(e.target.value)}}/>
            </div>
            </div>

            <div className="writeFormGroup">
                <textarea placeholder='Tell us about your Pet...' id="description" type='text' className='writeInput writeText' onChange={(e) => {setDescription(e.target.value)}}></textarea>
            </div>
            <button type='submit' className="writeSubmit">Publish</button>
        </form>
        
    </div>
  )
}

export default Write;
