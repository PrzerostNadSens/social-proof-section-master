import React from "react";

const Testimonials: React.FC = () => {
  return (
    <div className="testimonials">
      <div className="testimonial">
        <h3>Colton Smith</h3>
        <p>Verified Buyer</p>
        <p>
          “We needed the same printed design as the one we had ordered a week
          prior. Not only did they find the original order, but we also received
          it in time. Excellent!”
        </p>
      </div>
      <div className="testimonial">
        <h3>Irene Roberts</h3>
        <p>Verified Buyer</p>
        <p>
          “Customer service is always excellent and very quick turn around.
          Completely delighted with the simplicity of the purchase and the speed
          of delivery.”
        </p>
      </div>
      <div className="testimonial">
        <h3>Anne Wallace</h3>
        <p>Verified Buyer</p>
        <p>
          “Put an order with this company and can only praise them for the very
          high standard. Will definitely use them again and recommend them to
          everyone!”
        </p>
      </div>
    </div>
  );
};

export default Testimonials;
