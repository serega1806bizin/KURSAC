import  { useState } from 'react';

export const UploadFile = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    const newFiles = Array.from(event.target.files);
    setSelectedFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const removeFile = (index) => {
    setSelectedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  return (
    <div className="form-container-media">
      <label htmlFor="file" className="form-label">
        Медіа:
      </label>
      <div className="form-input-media">
        <input
          className="form-input-file"
          type="file"
          name="file"
          id="file"
          multiple
          onChange={handleFileChange}
        />
      </div>
      <ul id="file-list" className="file-list">
        {selectedFiles.map((file, index) => (
          <li key={index} className="file-list-item">
            <span className="file-name">{file.name}</span>
            <button className="delete-button" onClick={() => removeFile(index)}>
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

