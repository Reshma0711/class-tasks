
import './App.css'
import List, { List1, List2 } from './components/lists/list'
import Img from './components/images/image';




const App=()=>{
  return (
    <>
      <List />
      <List1 />
      <List2 />
      <Img
        src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg"
        height="500px"
        width="500px"
      /><br/>
      <Img src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg"
      height="250px"
      width="250px"/>
    </>
  );
}


export default App

