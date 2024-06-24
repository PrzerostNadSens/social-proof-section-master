import React from "react";

const testimonialsData = [
  {
    imgSrc: "assets/images/image-colton.jpg",
    name: "Colton Smith",
    description: "Verified Buyer",
    comment: `“We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!”`,
  },
  {
    imgSrc: "assets/images/image-irene.jpg",
    name: "Irene Roberts",
    description: "Verified Buyer",
    comment: `“Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.”`,
  },
  {
    imgSrc: "assets/images/image-anne.jpg",
    name: "Anne Wallace",
    description: "Verified Buyer",
    comment: `“Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!”`,
  },
];

const Testimonials: React.FC = () => {
  return (
    <div className="testimonials">
      {testimonialsData.map((testimonial, index) => (
        <div
          key={index}
          className="testimonial"
          style={{ "--index": index + 1 } as React.CSSProperties}
        >
          <div className="testimonial-content">
            <img
              src={testimonial.imgSrc}
              alt={testimonial.name}
              className="testimonial-img"
            />
            <div className="testimonial-author">
              <span className="testimonial-author-name">
                {testimonial.name}
              </span>
              <span className="testimonial-author-description">
                {testimonial.description}
              </span>
            </div>
          </div>
          <span className="testimonial-author-comment">
            {testimonial.comment}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
