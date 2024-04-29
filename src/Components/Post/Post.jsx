import './Post.css'
// import headerImage from '../../Assets/headerImage.jpg'
import { Link } from "react-router-dom";


const Post = (props) => {
  return (
    <div className='post'>
        <img src={props.image[0]=='/' ? ".."+props.image : props.image} alt="" className="postImage" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Energetic</span>
                <span className="postCat">Child-Friendly</span>
            </div>
            <span className="postTitle"><Link to={`/pets/${props.petID}`} className="link">{props.name}</Link></span>
            <hr />
            <span className="postDate">1 hrs ago</span>
        </div>
        <p className="postDescription">{props.description}</p>
    </div>
  )
}

export default Post
