import './Write.css'
import headerImage from '../Assets/headerImage.jpg'

const Write = () => {
  return (
    <div className='write'>
        <img src={headerImage} alt="" className="writeImg" />
        <form action="#" className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput"><i class="writeIcon fa-solid fa-plus"></i></label>
                <input type="file" name="fileInput" id="fileInput" style={{display: 'none'}} />
                <input type="text" placeholder='Title' className='writeInput' autoFocus={true}/>
            </div>
            <div className="writeFormGroup">
                <textarea placeholder='Tell your story...' type='text' className='writeInput writeText'></textarea>
            </div>
            <button className="writeSubmit">Publish</button>
        </form>
        
    </div>
  )
}

export default Write;
