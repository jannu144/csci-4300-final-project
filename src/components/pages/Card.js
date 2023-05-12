import React, { useState, useEffect } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
  getStorage,
  deleteObject,
  StorageRefFromUrl
} from "firebase/storage";
import { storage } from "../../firebase";
import { auth } from "../../firebase";
import { v4 } from "uuid";
import '../styles/Card.css'
function Card() {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const [description, setDescription] = useState("");
  
  const imagesListRef = ref(storage, "images/");

  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, { url: url, description: description }]);
      });
    });
    setDescription("");
  };

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, { url: url, description: "" }]);
        });
      });
    });
  }, []);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return unsubscribe;
  }, []);

  return (
    <div className="Card">
      {user ? (
        <div>
          <input
            type="file"
            onChange={(event) => {
              setImageUpload(event.target.files[0]);
            }}
          />
          <input
            type="text"
            placeholder="Add Description"
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
          <button onClick={uploadFile}>Upload Image</button>
        </div>
      ) : (
        <p>Please log in or sign up to upload files.</p>
      )}
      <div className="image-container">
        {imageUrls.map((img, index) => {
          return (
            <div key={index}>
              <img src={img.url} alt={img.description} />
              <p>{img.description}</p>
              {user && (
                <button
                  onClick={() => {
                    const imageRef = ref(storage, `images/${img.url}`);
                    setImageUrls((prev) =>
                      prev.filter((item) => item.url !== img.url)
                    );
                    deleteObject(imageRef)
                      .then(() => {
                        console.log("File deleted successfully");
                      })
                      .catch((error) => {
                        console.log("Error deleting file:", error);
                      });
                  }}
                >
                  Delete
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Card;  