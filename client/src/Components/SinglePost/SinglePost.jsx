import './SinglePost.css';
// import {petList} from '../../Assets/petList';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../../context/Context';


const SinglePost = () => {
    const location = useLocation()
    const path = (location.pathname.split("/")[2]);
    const [pet, setPet] = useState({})
    const {user} = useContext(Context);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [breed, setBreed] = useState("");
    const [animal, setAnimal] = useState("");
    const [updateMode, setUpdateMode] = useState(false);


    useEffect(()=>{
        const getPets = async () => {
            const res = await axios.get(`/api/posts/${path}`);
            setPet(res.data);
            setName(res.data.name);
            setDescription(res.data.description);
            setBreed(res.data.breed);
            setAnimal(res.data.animal);
        }
        getPets();
    }, [path])


    const handleDelete = async ()=>{
        try{
            await axios.delete(`/api/posts/${path}`, {data:{username: user.username}})
            window.location.replace('/pets')
        }catch(err){
            console.log(err);
        }
    }

    const handleUpdate = async () => {
        try{
            await axios.put(`/api/posts/${path}`, {
                username: user.username,
                name,
                description,
                breed,
                animal
            })
            // window.location.reload('/pets')
            setUpdateMode(false)
        }catch(err){
            console.log(err);
        }
    }


  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            {pet.imageURL && <img src={pet.imageURL} alt="Image" autoFocus className="singlePostImage" />}

            {updateMode ? <input type="text" onChange={(e) => {setName(e.target.value)}} className='singlePostTitleInput' value={name}/> : 
            <h1 className="singlePostTitle">{name}
            {pet.username == user?.username && 
            <div className="singlePostEdit">
                <i className="singlePostIcon fa-regular fa-pen-to-square" onClick={() => {setUpdateMode(true)}}></i>
                <i className="singlePostIcon fa-solid fa-trash" onClick={handleDelete}></i>
            </div>}
        </h1>
            }
            
            <div className="singlePostInfo">
                <span className="singlePostAthor">{updateMode ? <input type="text" onChange={(e) => {setAnimal(e.target.value)}} className="singlePostOthersInput" value={animal} /> : <b>{animal}</b>} ~ {updateMode ? <input type="text" onChange={(e) => {setBreed(e.target.value)}} className='singlePostOthersInput' value={breed}/> : <b>{breed}</b>}</span>
                <span className="singlePostDate">{new Date(pet.createdAt).toDateString()}</span>
            </div>

            {updateMode ? <textarea value={description} onChange={(e) => {setDescription(e.target.value)}} className='singlePostDescInput'/> : <p className='singlePostDesc'>{description}</p>}

            {updateMode && <button onClick={handleUpdate} className="singlePostButton">Update</button>}
            
            
        </div>
    </div>
  )
}

export default SinglePost;
