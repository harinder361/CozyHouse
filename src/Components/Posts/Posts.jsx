import Post from '../Post/Post'
import './Posts.css'
import {petList} from '../../Assets/petList';


const Posts = () => {
  return (
    <div className='posts'>
      <Post description={petList[13].description} petID={petList[13].petID} name={petList[13].name} image={petList[13].image}/>
      <Post description={petList[19].description} petID={petList[19].petID} name={petList[19].name} image={petList[19].image}/>
      <Post description={petList[23].description} petID={petList[23].petID} name={petList[23].name} image={petList[23].image}/>
    </div>
  )
}

export default Posts
