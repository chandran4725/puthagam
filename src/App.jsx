
import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import ThemeProvider from "./components/ThemeProvider"
import { Provider } from "react-redux"
import { Store } from "./components/Store"


const App = () => {
  return (
    <Provider store={Store}>
      <ThemeProvider>
        <Navbar />
        <Outlet />
      </ThemeProvider>
    </Provider>
  )
}

export default App