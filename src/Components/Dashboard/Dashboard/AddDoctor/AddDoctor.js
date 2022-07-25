import React, { useState } from "react";

const AddDoctor = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("image", image);

    fetch("https://murmuring-plains-03551.herokuapp.com/addDoctor", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="row container d-flex justify-content-center ">
      <h4 className="mt-4 mb-5 text-center" style={{ color: "purple" }}>
        Add Doctor
      </h4>
      <div className="col-md-8 shadow-lg p-3 mb-5 bg-body rounded">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 form-check" id="file">
            <label className="form-label" htmlFor="customFile">
              Upload Image
            </label>
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              className="form-control"
              id="customFile"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
