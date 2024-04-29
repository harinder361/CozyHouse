import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT US</span>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5c95OtOoIH0uZrHWODlUadX4lTh-3iF3RK8GgyBCOPA&s" alt="CozyHouse" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et consequuntur cum perspiciatis</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Support</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
        <a href="https://www.facebook.com/" className="sidebarIcon"><i className="sidebarIcon fa-brands fa-square-facebook"></i></a>
          <a href="https://twitter.com/?lang=en" className="sidebarIcon"><i className="sidebarIcon fa-brands fa-square-x-twitter"></i></a>
          <a href="https://in.pinterest.com/" className="sidebarIcon"><i className="sidebarIcon fa-brands fa-square-pinterest"></i></a>
          <a href="https://www.instagram.com/" className="sidebarIcon"><i className="sidebarIcon fa-brands fa-square-instagram"></i></a>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
