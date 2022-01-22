import "./App.css";
import Profile from "./profile/Profile.js";
import Img1 from "./Img1.jpg";

function App() {
  const fullName = "adelast";
  const bio = "lorem ipsum";
  const profession = "webdev";
  const handleName = (name) => alert("I am fullName : " + name);
  return (
    <div className="App">
      <Profile
        fullName={fullName}
        bio={15}
        profession={profession}
        handleName={handleName}
      >
        <img src={Img1} />
      </Profile>
    </div>
  );
}

export default App;
