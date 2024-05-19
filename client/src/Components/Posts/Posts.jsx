import { useState, useEffect } from 'react';
import Post from '../Post/Post'
import './Posts.css'
// import {petList} from '../../Assets/petList';
import axios from 'axios';


const Posts = () => {
  const [petList, setPetList] = useState([]);

  useEffect(() => {
    const fetchPets = async ()=>{
      const res = await axios.get("/api/posts");
      setPetList(res.data);
    }
    fetchPets();
  }, [])

  return (
    <>
    {/* {petList &&
    <div className='posts'>
      <Post pet={petList[0]}/>
      <Post pet={petList[0]}/>
      <Post pet={petList[0]}/>
    </div>} */}
    </>
  )
}

export default Posts
