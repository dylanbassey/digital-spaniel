import { DesktopCardStyles, MobileCardStyles } from "./TestimonialsStyles";

interface Testimonial {
  id: number;
  name: string;
  comment: string;
  imgUrl: string;
  company: string;
}

export const TestimonialDesktop = ({
  testimonial,
  selected,
}: {
  testimonial: Testimonial;
  selected: boolean;
} & React.HTMLAttributes<HTMLElement>) => {
  const { name, comment, imgUrl, company } = testimonial;

  return (
    <DesktopCardStyles
      textColor={selected ? "#FFFFFF" : "#506473"}
      bgColor={selected ? "#19293A" : "#E2E4E6"}
    >
      <div className="testimonial-content">
        <p>{comment}</p>
      </div>
      <img src={imgUrl} alt={name} />
      <div className="container">
        <div className="testimonial-name">{name}</div>
        <div className="testimonial-company">{company}</div>
      </div>
    </DesktopCardStyles>
  );
};

export const TestimonialMobile = ({
  testimonial,
}: {
  testimonial: Testimonial;
} & React.HTMLAttributes<HTMLElement>) => {
  const { name, comment, imgUrl, company } = testimonial;

  return (
    <MobileCardStyles>
      <img src={imgUrl} alt={name} />
      <div className="testimonial-content">
        <p>{comment}</p>
      </div>

      <div>
        <div className="testimonial-name">{name}</div>
        <div className="testimonial-company">{company}</div>
      </div>
    </MobileCardStyles>
  );
};
