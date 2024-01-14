import React, { useEffect } from 'react';
import {  func, oneOfType, instanceOf, string  } from 'prop-types';
import { Typography } from '@mui/material';
import UploadIcon from '@mui/icons-material/Upload';

import '../../styles/main.css';

/**
 * FileUploaderComponent is a reusable component that allows users to upload images.
 *
 * @param {Object} props - The component props.
 * @param {File|String} props.pic - The image file or URL.
 * @param {Function} props.handleFileInputChange - The function to handle file input change.
 * @param {Function} props.setSelectedFile - The function to set the selected file.
 * @param {File|String} props.selectedFile - The currently selected file.
 * @returns {JSX.Element} The FileUploaderComponent JSX element.
 */
const FileUploaderComponent = ({ pic, handleFileInputChange, setSelectedFile, selectedFile }) => {

  useEffect(() => {
    setSelectedFile(pic instanceof File ? pic : null);
  }, [pic]);

  return (
    <div className="card-upload">
      <input
        type="file"
        accept="image/*"
        onChange={handleFileInputChange}
        style={{ display: "none" }}
        id="file-uploader-input"
      />
      <div className='upload'>
        <label htmlFor="file-uploader-input" className='file-uploader'>
          {selectedFile ? (
            <>
              {/* Show the uploaded image */}
              <div className="uploaded-container">
                <img
                  src={selectedFile instanceof File ? URL.createObjectURL(selectedFile) : selectedFile}
                  alt="uploaded image"
                  className="uploaded-image"
                />
                <p className="replace-text">
                  Replace
                </p>
              </div>
            </>
          ) : (
            <>
             {/* Show the upload icon and text */}
              <div className="upload-icon">
                <UploadIcon />
              </div>
              <div className="upload-icon">
                <Typography variant="body2">Browse image</Typography>
              </div>
            </>
          )}
        </label>
      </div>
    </div>
  );
};

FileUploaderComponent.propTypes = {
  pic: oneOfType([string, instanceOf(File)]),
  handleFileInputChange: func.isRequired,
  setSelectedFile: func.isRequired,
  selectedFile: oneOfType([string, instanceOf(File)]),
}

export default FileUploaderComponent;
