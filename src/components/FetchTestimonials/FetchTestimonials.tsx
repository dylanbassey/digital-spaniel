import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTestimonials } from "../../features/testimonialsSlice";
import { RootState, AppDispatch } from "../../store";

const Testimonials: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, status, error } = useSelector(
    (state: RootState) => state.testimonials
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchTestimonials());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Testimonials</h2>
      <ul>
        {items.map((testimonial, index) => (
          <li key={index}>{testimonial.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Testimonials;
