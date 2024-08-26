import { createContext, useState, useEffect, ReactNode } from "react";

type Testimonial = {
  id: number;
  name: string;
  comment: string;
  imgUrl: string;
  company: string;
};

export const TestimonialsContext = createContext<{
  testimonials: Testimonial[];
}>({
  testimonials: [],
});

export const TestimonialsProvider = ({ children }: { children: ReactNode }) => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const fetchTestimonials = async () => {
    try {
      const res = await fetch("/testimonials.json");
      if (!res.ok) {
        throw new Error("Network error");
      }
      const data: { testimonials: Testimonial[] } = await res.json();
      setTestimonials(data.testimonials);
    } catch (error) {
      console.log("Error fetching data", error);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const value = { testimonials };
  return (
    <TestimonialsContext.Provider value={value}>
      {children}
    </TestimonialsContext.Provider>
  );
};
