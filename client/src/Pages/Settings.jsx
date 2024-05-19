import Sidebar from '../Components/Sidebar/Sidebar.jsx';
import './Settings.css';
import headerImage from '../Assets/headerImage.jpg'

const Settings = () => {
  return (
    <div className='settings'>
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Delete Account</span>
            </div>
            <form action="#" className="settingsForm">
                <label htmlFor="">Profile Picture</label>
                <div className="settingsPP">
                    <img src={headerImage} alt="headerImage" />
                    <label htmlFor="fileInput">
                        <i className="settingsPPIcon fa-solid fa-user"></i>
                    </label>
                    <input type="file" name="fileInput" id="fileInput" style={{display: 'none'}}/>
                </div>

                <label>Usernamme</label>
                <input type="text" placeholder='Your_Name' />

                <label>Email</label>
                <input type="email" placeholder='Your_Name@gmail.com' />

                <label>Password</label>
                <input type="password"/>

                <button className="settingsSubmit">Update</button>

            </form>
        </div>
        <Sidebar/>
    </div>
  )
}

export default Settings
