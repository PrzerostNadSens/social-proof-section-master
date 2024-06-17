import React from "react";

const Testimonials: React.FC = () => {
  return (
    <div className="testimonials">
      <div className="testimonial">
        <div className="testimonial-content">
          <img
            src="assets/images/image-colton.jpg"
            alt="Colton Smith"
            className="testimonial-img"
          />
          <div className="testimonial-author">
            <span className="testimonial-author-name">Colton Smith</span>
            <span className="testimonial-author-description">
              Verified Buyer
            </span>
          </div>
        </div>
        <span className="testimonial-author-comment">
          “We needed the same printed design as the one we had ordered a week
          prior. Not only did they find the original order, but we also received
          it in time. Excellent!”
        </span>
      </div>

      <div className="testimonial">
        <div className="testimonial-content">
          <img
            src="assets/images/image-irene.jpg"
            alt="Irene Roberts"
            className="testimonial-img"
          />
          <div className="testimonial-author">
            <span className="testimonial-author-name">Irene Roberts</span>
            <span className="testimonial-author-description">
              Verified Buyer
            </span>
          </div>
        </div>
        <span className="testimonial-author-comment">
          “Customer service is always excellent and very quick turn around.
          Completely delighted with the simplicity of the purchase and the speed
          of delivery.”
        </span>
      </div>

      <div className="testimonial">
        <div className="testimonial-content">
          <img
            src="assets/images/image-anne.jpg"
            alt="Anne Wallace"
            className="testimonial-img"
          />
          <div className="testimonial-author">
            <span className="testimonial-author-name">Anne Wallace</span>
            <span className="testimonial-author-description">
              Verified Buyer
            </span>
          </div>
        </div>
        <span className="testimonial-author-comment">
          “Put an order with this company and can only praise them for the very
          high standard. Will definitely use them again and recommend them to
          everyone!”
        </span>
      </div>
    </div>
  );
};

export default Testimonials;
