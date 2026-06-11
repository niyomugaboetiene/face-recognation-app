import { useState } from "react"
import axios from "axios";

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
          const formData = new FormData();

          formData.append('image_data', preview);

          const response = await axios.post(
            'http://127.0.0.1:5000/classify_image', formData
          );

          setResult(response.data[0]);
          console.log(response.data);
       } catch (err) {
        console.error(err);
       }
     }

  return (
       <div>
            <div>
                <h1>Face Recognation App</h1>

           <input type="file" 
              accept="image/*"
              onChange={handleFileChange}
           />

           {preview && (
            <>
               <br />
               <img src={preview} 
                  alt="Preview" 
                  width={300}
               />

               <br />

               <button onClick={classifyImage}>
                   Predict
               </button>
            </>
           )}

           {result && (
              <div>
                   <h2>Prediction Result</h2>

                   <p>
                    Name: {result.class}
                   </p>
              </div>
           )}
            </div>
       </div>
  )
}

export default App
