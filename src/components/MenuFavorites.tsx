import { LuFlame, LuUtensils } from "react-icons/lu";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";
import { siteData } from "@/data/site";

export default function MenuFavorites() {
  return (
    <section className="section-dark" id="favorites">
      <div className="container">
        <SectionHeading
          eyebrow="Recent favorites"
          title="A rotating lineup with real Louisiana flavor."
          text="The menu is not locked into one static list. These are favorites and specials seen across recent posts, with the day’s actual lineup posted through Facebook and call-ahead updates."
          center
        />

        <div className="favorites-grid">
          {siteData.menuFavorites.map((item, index) => (
            <FadeIn key={item.name} delay={index * 0.04}>
              <article className="favorite-card">
                <div className="favorite-icon">
                  {index % 2 === 0 ? <LuUtensils /> : <LuFlame />}
                </div>

                <span>{item.tag}</span>
                <h3>{item.name}</h3>
                <p>{item.note}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}