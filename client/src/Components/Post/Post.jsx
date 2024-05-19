import './Post.css'
// import headerImage from '../../Assets/headerImage.jpg'
import { Link } from "react-router-dom";


const Post = ({pet}) => {
  return (
    <div className='post'>
        {pet.imageURL && <img src={pet.imageURL[0]=='/' ? ".."+pet.imageURL : pet.imageURL} alt="" className="postImage" />}
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Energetic</span>
                <span className="postCat">Child-Friendly</span>
            </div>
            <span className="postTitle"><Link to={`/pets/${pet._id}`} className="link">{pet.name}</Link></span>
            <hr />
            <span className="postDate">{new Date(pet.createdAt).toDateString()}</span>
        </div>
        <p className="postDescription">{pet.description}</p>
    </div>
  )
}

export default Post
