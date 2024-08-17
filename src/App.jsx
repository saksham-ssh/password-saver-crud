import FetchData from "./components/FetchData"
import SavePassword from "./components/SavePassword"
import Update from "./components/Update"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
    <div className="container">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SavePassword />} />
                <Route path="/read" element={<FetchData />}/>
                <Route path="/update" element={<Update />} />
            </Routes>
        </BrowserRouter>
    </div>
    </>
  )
}

export default App
