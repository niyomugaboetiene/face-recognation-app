import { BrowserRouter, Routes, Route } from "react-router-dom";
import Entry from "./Entry";

function App() {
  return (
      <BrowserRouter>
          <Routes>
               <Route path="/" element={<Entry />}/>
          </Routes>
      </BrowserRouter>
  )
}

// https://www.figma.com/design/9HjRFZdSA8DwrIO1XBPiaM/Face-Recognition---Landing-Page--Community-?node-id=17-1093&t=sCFUJBVnndcwDrxl-0
export default App
