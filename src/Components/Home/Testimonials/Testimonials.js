import React from "react";
import people1 from "../../../images/people-1.png";
import people2 from "../../../images/people-2.png";
import people3 from "../../../images/people-3.png";
import Testimonial from "../Testimonial/Testimonial";
import quote2 from "../../../images/quote2.png";

const testimonialData = [
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ",
    name: "Wilson Harry",
    from: "California",
    img: people1,
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ",
    name: "Ema Gomez",
    from: "California",
    img: people2,
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ",
    name: "Aliza Farari",
    from: "California",
    img: people3,
  },
];
const Testimonials = () => {
  return (
    <section className="my-5 py-5 d-flex justify-content-center">
      <div className="container w-75">
        <div className="d-flex justify-content-between mb-4">
          <div>
            <h6 className="text-uppercase" style={{ color: "#1cc7c1" }}>
              Testimonial
            </h6>
            <h1 style={{ color: "#3A4256" }}>
              What's Our Patients <br /> Says
            </h1>
          </div>
          <div>
            <img
              src={quote2}
              alt="quote"
              width="80"
              style={{ color: "#1cc7c1" }}
            />
          </div>
        </div>
        <div className="row g-0">
          {testimonialData.map((testimonial) => (
            <div className="col-md-4" key={testimonial.name}>
              <Testimonial testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
