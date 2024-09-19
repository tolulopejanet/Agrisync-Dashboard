import React, { useRef, useState } from "react";
import imgUpload from "../../assets/uploadImg.png";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";

const ImageUpload = () => {
  const inputRef = useRef(null);
  const [image, setImage] = useState("");

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setImage(event.target.files[0]);
  };
  return (
    <>
      <div className="image-upload-container">
        <div className="box-decoration">
          <label htmlFor="image-upload-input" className="image-upload-label">
            <image />
          </label>
          <div onClick={handleImageClick} style={{ cursor: "pointer" }}>
            {image ? (
              <img
                src={URL.createObjectURL(image)}
                alt=""
                className="img-display-after"
              />
            ) : (
              <img src={imgUpload} alt="" className="img-display-before" />
            )}
            <input
              type="file"
              ref={inputRef}
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
          </div>
          <p
            className="image-upload-button"
            onClick={handleImageClick}
            style={{ color: colors.primary[400] }}
          >
            Upload Image
          </p>
        </div>
      </div>
    </>
  );
};

export default ImageUpload;
