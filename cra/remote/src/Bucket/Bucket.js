import React, { useState } from "react";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from '../../firebase';
import './Bucket.css'; // Importer le fichier CSS

function Bucket() {
  const [imgUrl, setImgUrl] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [progresspercent, setProgresspercent] = useState(0);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const file = e.target[0]?.files[0];
    if (!file) return;
    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on("state_changed",
      (snapshot) => {
        const progress =
          Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setProgresspercent(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgUrl(downloadURL);
          setPreviewUrl(null); // Réinitialiser l'aperçu après le téléchargement réussi
        });
      }
    );
  };

  return (
    <div className="bucket-container">
      <form onSubmit={handleSubmit} className="form">
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
      {
        previewUrl &&
        <div>
          <p className="message">Preview</p>
          <img src={previewUrl} alt="preview" className="preview-img" />
        </div>
      }
      {
        !imgUrl && progresspercent > 0 &&
        <div className="outerbar">
          <div className="innerbar" style={{ width: `${progresspercent}%` }}>{progresspercent}%</div>
        </div>
      }
      {
        imgUrl &&
        <div>
          <p className="message">Succès</p>
          <img src={imgUrl} alt="uploaded file" height={200} />
        </div>
      }
    </div>
  );
}

export default Bucket;
