import React from "react";
import treatement from "../../../images/treatment.png";
import "./FeaturedService.css";

const FeaturedService = () => {
  return (
    <div className="d-flex justify-content-center mt-5 mb-5 pt-5 pb-5">
      <div className=" mb-3 w-75">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={treatement}
              className="img-fluid rounded-start"
              alt="treatementImage"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title">
                Exceptional Dental
                <br /> Care, On Your Terms
              </h2>
              <p className="card-text text-secondary">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book.
              </p>
              <button className="learnMore-btn">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedService;
