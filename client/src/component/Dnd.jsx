import React, { useRef, useState } from 'react';
import Sidebar from './Profile\'/Sidebar';

function Dnd() {
    const [files, setFiles] = useState([]);
    const inputRef = useRef();

    const handleDrop = (e) => {
        e.preventDefault();
        const droppedFiles = Array.from(e.dataTransfer.files);
        setFiles(droppedFiles);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleSelectFile = (e) => {
        const selectedFile = e.target.files[0];
        setFiles([selectedFile]);
    };

    return (
        <>
            <Sidebar />
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center'>
                {files.length > 0 ? (
                    <div className="bg-white shadow-md rounded-md p-4 w-96">
                        <h2 className="text-lg font-semibold mb-2">Selected Files:</h2>
                        <ul className="text-gray-700">
                            {files.map((file, index) => (
                                <li key={index}>{file.name}</li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <div
                        className="bg-gray-200 shadow-md rounded-md p-8 cursor-pointer flex flex-col items-center justify-center text-center"
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                    >
                        <h1 className="text-lg font-semibold mb-4">Drag and drop your file here</h1>
                        <h1 className="text-lg mb-8">or</h1>
                        <input
                            type="file"
                            onChange={handleSelectFile}
                            hidden
                            ref={inputRef}
                        />
                        <label
                            className="bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 cursor-pointer"
                            htmlFor="fileInput"
                        >
                            Select File
                        </label>
                    </div>
                )}
            </div>
        </>
    );
}

export default Dnd;
