import './Post.css'
import headerImage from '../../Assets/headerImage.jpg'

const Post = () => {
  return (
    <div className='post'>
        <img src={headerImage} alt="" className="postImage" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">Lorem ipsum dolor sit </span>
            <hr />
            <span className="postDate">1 hrs ago</span>
        </div>
        <p className="postDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci repudiandae nesciunt pariatur aperiam, fugit minima ex, dignissimos laboriosam exercitationem, consequuntur deleniti fuga! Vitae odit perferendis quo voluptates adipisci quibusdam nesciunt.</p>
    </div>
  )
}

export default Post
