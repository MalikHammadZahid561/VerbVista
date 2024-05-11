// import React, { useState } from 'react';

// const FileUploadButton = () => {
//   const [fileName, setFileName] = useState('');
//   const [fileError, setFileError] = useState('');

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const validTypes = ['text/plain', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
//       if (validTypes.includes(file.type)) {
//         setFileName(file.name);
//         setFileError(''); // Clear any previous error messages
//       } else {
//         setFileName('');
//         setFileError('Only .txt or .doc files are allowed.');
//       }
//     } else {
//       setFileName('');
//       setFileError(''); // Reset error message when no file is selected
//     }
//   };

//   return (
//     <div className="relative flex ">
//       <button 
//         className="px-4 py-2   rounded hover:bg-slate-400 transition-colors cursor-pointer"
//         onClick={() => document.getElementById('fileInput').click()}
//       >
//         {fileName || "Upload File"}
//       </button>
//       <div className='flex'>

//       {/* <input
//         type="file"
//         id="fileInput"
//         className="opacity-0 absolute inset-0 w-full h-full cursor-pointer"
//         style={{ display: 'none' }}
//         onChange={handleFileChange}
//         accept=".txt,.doc,.docx" // Suggests acceptable file types in the file dialog
//       /> */}
//       {fileError && <p className="text-red-500 text-sm mx-2 mt-2">{fileError}</p>}
//       </div>
//     </div>
//   );
// };

// export default FileUploadButton;
