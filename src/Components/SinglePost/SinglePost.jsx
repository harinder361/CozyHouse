import './SinglePost.css';
import {petList} from '../../Assets/petList';
import { useParams } from 'react-router-dom';


const SinglePost = () => {
    const params = useParams();
    const petID = Number(params.petID);
    console.log(params);

  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            <img src={petList[petID].image} alt="Image" className="singlePostImage" />
            <h1 className="singlePostTitle">{petList[petID].name}
                <div className="singlePostEdit">
                    <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                    <i className="singlePostIcon fa-solid fa-trash"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAthor">Author: <b>Lorem</b></span>
                <span className="singlePostDate">1 hour ago</span>
            </div>
            <p className='singlePostDesc'>{petList[petID].description}</p>
        </div>
    </div>
  )
}

export default SinglePost
