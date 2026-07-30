import { useState } from "react";
import axios from "axios";

const Prediction = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImage(file);
    setResult(null); 
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const classifyImage = async () => {
    if (!image) {
      alert("Please select an image first!");
      return;
    }

    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("image_data", preview);

      const response = await axios.post(
        "http://127.0.0.1:5000/classify_image",
        formData
      );

      setResult(response.data[0]);
      console.log(response.data);
    } catch (err) {
      console.error(err);
      alert("Error connecting to the ML model. Please check your backend.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-[#0a0a10] overflow-hidden flex items-center justify-center">
      <div className="absolute top-[-15%] left-[-10%] w-[700px] h-[700px] bg-gradient-to-br from-purple-600/30 to-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[-15%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-tl from-pink-600/30 to-rose-500/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-4xl mx-4 p-6">
        
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-3">
            Face Recognition App
          </h1>
          <p className="text-gray-400 text-lg">Upload an image and let our AI identify the person.</p>
        </div>

        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl p-8 md:p-12">
          
          <div className="flex flex-col items-center justify-center w-full mb-8">
            <label 
              htmlFor="file-upload"
              className="w-full flex flex-col items-center justify-center h-48 border-2 border-dashed border-gray-600 rounded-2xl cursor-pointer hover:border-purple-400 transition-colors duration-300 bg-white/5 hover:bg-white/10"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                </svg>
                <p className="mb-2 text-sm text-gray-400"><span className="font-semibold text-white">Click to upload</span> or drag and drop</p>
                <p className="text-xs text-gray-500">PNG, JPG, JPEG (MAX. 5MB)</p>
              </div>
              <input 
                id="file-upload" 
                type="file" 
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
          </div>

          {preview && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-6">
              
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
                <img 
                  src={preview} 
                  alt="Preview" 
                  className="relative rounded-2xl w-full h-64 md:h-72 object-cover shadow-lg border border-white/10"
                />
              </div>

              <div className="flex flex-col justify-between h-full gap-6">
                
                <button 
                  onClick={classifyImage} 
                  disabled={isLoading}
                  className={`w-full py-4 rounded-xl font-bold text-white transition-all duration-300 shadow-lg 
                    ${isLoading 
                      ? 'bg-gray-600 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-[1.02] hover:shadow-purple-500/40'
                    }`}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Analyzing...
                    </span>
                  ) : "🚀 Identify Person"}
                </button>

                {result && (
                  <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/10 backdrop-blur-lg border border-green-500/30 rounded-xl p-5 text-center animate-fadeIn">
                    <p className="text-sm text-green-300 uppercase tracking-wider font-semibold mb-1">Detection Successful</p>
                    <h2 className="text-3xl font-bold text-white">
                      {result.class || "Unknown"}
                    </h2>
                    <div className="mt-3 h-1 w-20 mx-auto bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"></div>
                  </div>
                )}

                {!result && (
                  <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-center border-dashed">
                    <p className="text-gray-500 text-sm">Waiting for prediction...</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="absolute bottom-6 w-full text-center text-gray-600 text-sm">
        Powered by KAIROS • Developed by Niyomugabo Etiene
      </div>
    </div>
  );
};

export default Prediction;