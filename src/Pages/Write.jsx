import './Write.css'
import headerImage from '../Assets/headerImage.jpg'
import {petList} from '../Assets/petList';

const Write = () => {

  const updateLocalStorage = () => {
    localStorage.setItem('petList', JSON.stringify(petList));
  }

  const addToPetList = () => {
    document.querySelector('.writeForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission

      // Get form values
      const name = document.querySelector('#name').value;
      const image = document.querySelector('#imageURL').value;
      const description = document.querySelector('#description').value;
      const petID = 31;

      // Create new object
      const newObj = { name, image, description, petID };

      // Add new object to array
      console.log(petList);
      petList.push(newObj);

      // Update local storage
      updateLocalStorage();

      // Optional: Show a confirmation message
      // alert('New array element added successfully!');

      // Reset form
      document.querySelector('.writeForm').reset();
  });




  }

  return (
    <div className='write'>
        <img src={headerImage} alt="" className="writeImg" />
        <form action="#" className="writeForm">
            <div className="writeFormGroup">
                {/* <label htmlFor="fileInput"><i class="writeIcon fa-solid fa-plus"></i></label>
                <input type="file" name="fileInput" id="fileInput" style={{display: 'none'}} /> */}
                <input type="text" placeholder='Name' id="name" className='writeInput' autoFocus={true}/>
            </div>
            <div className="writeFormGroup">
              <input type="text" placeholder='ImageURL' id="imageURL" className="writeInput" style={{fontSize: "20px"}}/>
            </div>
            <div className="writeFormGroup">
                <textarea placeholder='Tell us about your Pet...' id="description" type='text' className='writeInput writeText'></textarea>
            </div>
            <button onClick={addToPetList} className="writeSubmit">Publish</button>
        </form>
        
    </div>
  )
}

export default Write;
