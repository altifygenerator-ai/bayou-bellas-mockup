import { LuMessageCircle, LuStar } from "react-icons/lu";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";
import { siteData } from "@/data/site";

export default function ReviewsSection() {
  return (
    <section className="section-cream" id="reviews">
      <div className="container">
        <SectionHeading
          eyebrow="Customer reviews"
          title="Glenwood is already talking about Bayou Bella’s."
          text="Customers keep calling out the flavor, portions, friendly service, and the kind of Cajun cooking that sells out fast."
          center
        />

        <div className="reviews-grid">
          {siteData.reviews.map((review, index) => (
            <FadeIn key={review.name} delay={index * 0.04}>
              <article className="review-card">
                <div className="review-stars" aria-label="Recommended review">
                  <LuStar />
                  <LuStar />
                  <LuStar />
                  <LuStar />
                  <LuStar />
                </div>

                <p className="review-quote">“{review.quote}”</p>
                {review.detail ? <p className="review-detail">{review.detail}</p> : null}

                <div className="review-footer">
                  <LuMessageCircle />
                  <strong>{review.name}</strong>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
