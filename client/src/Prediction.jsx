import { useState } from "react"
import axios from "axios";

const Prediction = () => {
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

      <div className="relative w-full min-h-screen bg-[#08080e] overflow-hidden">
           <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-600/40 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-pink-600/30 rounded-full blur-[120px] pointer-events-none"></div>
          
            <div className="flex justify-between items-center p-5 max-w-7xl mx-auto px-8">
             <div>
                  <h1 className="text-center text-xl font-bold text-white mb-3">Face Recognation App (ML Based)</h1>

           <input type="file" 
              accept="image/*"
              className="w-full border-green-400 border-2 rounded-full p-2 mb-3 text-gray-700 font-bold"
              onChange={handleFileChange}
           />

           {preview && (
            <>
               <br />
               <img src={preview} 
                  alt="Preview" 
                  className=" rounded-xl object-fill ms-2 shadow-lg"
                  width={300}
               />

               <br />

               <button onClick={classifyImage} className="w-full mt-2 bg-blue-300 py-2 rounded-lg font-bold text-white hover:scale-105 transition duration-200">
                   Predict
               </button>
            </>
           )}

          <div>
             {result && (
              <div className="mt-3 bg-white p-3">
                   <h2 className="text-gray-700 font-bold text-center mb-2 text-xl">Prediction Result</h2>

                   <p className="font-bold text-lg text-gray-700">
                    Name: {result.class}
                   </p>
              </div>
           )}
          </div>
             </div>
            </div>
       </div>
}

export default Prediction;