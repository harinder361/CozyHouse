import './SinglePost.css';

const SinglePost = () => {
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            <img src="" alt="Image" className="singlePostImage" />
            <h1 className="singlePostTitle">Lorem, ipsum dolor sit amet.
                <div className="singlePostEdit">
                    <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                    <i className="singlePostIcon fa-solid fa-trash"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAthor">Author: <b>Lorem</b></span>
                <span className="singlePostDate">1 hour ago</span>
            </div>
            <p className='singlePostDesc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio a accusamus illum ex. Blanditiis laborum, architecto laboriosam ullam pariatur, suscipit adipisci perspiciatis eos in minus quibusdam amet iusto quia consequuntur?
            Totam libero error officia atque commodi asperiores voluptate quis tenetur rem, consequuntur suscipit, officiis id, alias vitae inventore fugit. Sapiente adipisci ducimus esse non repellendus totam commodi porro ipsum temporibus!
            Numquam, natus commodi. Consequuntur deserunt nostrum quis eligendi eum, libero repellat excepturi ratione quia perferendis voluptate illum, expedita iusto et qui dignissimos totam eaque similique dolores praesentium itaque, laborum sit?</p>
        </div>
    </div>
  )
}

export default SinglePost
