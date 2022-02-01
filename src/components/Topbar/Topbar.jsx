import '../Topbar/topbar.css';
function Topbar() {
  return (
    <div className="topBar">
      <ul className="topListRight">
        <li>
          <a className="topListItemRight" href="#app">
            Get the App
          </a>
        </li>
      </ul>
      <ul className="topList">
        <li>
          <a className="topListItem" href="#addrestaurant">
            Add restaurant
          </a>
        </li>
        <li>
          <a className="topListItem" href="#login">
            Log in
          </a>
        </li>
        <li>
          <a className="topListItem" href="#signup">
            Sign up
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Topbar;
