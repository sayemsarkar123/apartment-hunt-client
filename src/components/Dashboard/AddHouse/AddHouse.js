import React, { useState } from "react";
import './AddHouse.css'
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";

const AddHouse = () => {
  const [info, setInfo] = useState({});
  const [file, setFile] = useState(null);
  const handleBlur = e => {
    const newInfo = {...info};
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  }

    const handleFileChange = (e) => {
      const newFile = e.target.files[0];
      setFile(newFile);
    }
    const {register, handleSubmit} = useForm();
    const onSubmit = () => {
      const formData = new FormData()
      formData.append('file', file);
      formData.append('title', info.title);
      formData.append('location', info.location);
      formData.append('price', info.price);
      formData.append('bedroom', info.bedroom);
      formData.append('bathroom', info.bathroom);

      fetch('http://localhost:4000/addHouse', {
        method: 'POST',
        body: formData
      })
      .then(res => res.json())
      .then(data => {
        if (data) alert('Successfully Added');
      })
      .catch(error => {
        console.log(error);
      })
    }
  return (
    <div >
    <div className="py-2">
       <h4>Add Rent House</h4>
    </div>
    <div className="d-flex flex-wrap p-5" style={{ height: '460px', overflow: 'auto', backgroundColor: 'rgb(242 247 255)' }}>
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-row">
        <div className="form-group col-md-6">
        <label htmlFor="title">Service Title</label>
          <input
            onBlur={handleBlur}
            type="text"
            name="title"
            ref={register({ required: true })}
            placeholder="Enter title"
            className="form-control input-field"
          />
        </div>
        <div className="form-group col-md-6">
        <label htmlFor="price">Price</label>
          <input
            onBlur={handleBlur}
            type="text"
            name="price"
            ref={register({ required: true })}
            placeholder="Price"
            className="form-control input-field"
          />
        </div>
        </div>
        <div className="form-row">
        <div className="form-group col-md-6">
        <label htmlFor="location">Location</label>
          <input
            onBlur={handleBlur}
            type="text"
            name="location"
            ref={register({ required: true })}
            placeholder="Enter Location"
            className="form-control input-field"
          />
        </div>
        <div className="form-group col-md-6">
        <label htmlFor="bathroom">No. of Bathroom</label>
          <input
            onBlur={handleBlur}
            type="text"
            name="bathroom"
            ref={register({ required: true })}
            placeholder="No. of Bathroom"
            className="form-control input-field"
          />
        </div>
        </div>
        <div className="form-row">
        <div className="form-group col-md-6">
        <label htmlFor="bedroom">No. of Bedroom</label>
          <input
            onBlur={handleBlur}
            type="text"
            name="bedroom"
            ref={register({ required: true })}
            placeholder="No. of Bedroom"
            className="form-control input-field"
          />
        </div>

          <div className="form-group col-md-6">
            <label style={{marginTop: '42px'}} htmlFor="files" className="btn btn-outline-success">
              <FontAwesomeIcon icon={faCloudUploadAlt} />
              <span className="ml-2">Upload image</span>
            </label>
            <input
              onChange={handleFileChange}
              type="file"
              style={{ display: 'none' }}
              className="form-control w-25 py-4"
              id="files"
            />
          </div>
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-success">
            {" "}
            Submit{" "}
          </button>
        </div>
      </form>
    </div>
</div>
  );
};

export default AddHouse;