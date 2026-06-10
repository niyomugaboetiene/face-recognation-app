import { useState } from "react"

function App() {

     const [image, setImage] = useState(null);
     const [preview, setPreview] = useState("");
     const [result, setResult] = useState(null);

     const handleFileChange = (e) => {
        const file = e.target.files[0]

        if (!file) return;

        setImage(file);

        const reader = new FileReader();

        reader.onloadend = () => {
          setPreview(reader.result);
        }

        reader.readAsDataURL(file);
     }

     const classifyImage = async () => {
       try {
          const response = await axios.post(
            'http://localhost:5000/classify_image', { image: preview }
          );

          setResult(response.data);
       } catch (err) {
        console.error(err);
       }
     }
     
  return (
       <div>

       </div>
  )
}

export default App
