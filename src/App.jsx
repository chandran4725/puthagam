import Allbooks from "./components/Allbooks"
import Book from "./components/Book"
import Login from "./components/Login"
import Navbar from "./components/Navbar"
import ReadingIntro from "./components/ReadingIntro"
import Signup from "./components/Signup"

const App = () => {
  return (
    <div>
      <Navbar/>
      <ReadingIntro/>
      <Allbooks/>
    </div>
  )
}

export default App