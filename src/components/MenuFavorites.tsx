import {
  LuDrumstick,
  LuFlame,
  LuFish,
  LuPhone,
  LuSoup,
  LuSparkles,
  LuUtensils,
} from "react-icons/lu";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";
import { siteData } from "@/data/site";

const icons = [LuFlame, LuSoup, LuFish, LuUtensils, LuDrumstick, LuSparkles];

export default function MenuFavorites() {
  return (
    <section className="section-dark" id="favorites">
      <div className="container">
        <SectionHeading
          eyebrow="Menu favorites"
          title="Daily specials, Cajun favorites, and custom menus worth calling about."
          text="The truck menu changes often, but Bayou Bella’s can do a lot more than one daily board. Call ahead for today’s lineup, or ask about a custom menu for events, special orders, and bigger meals."
          center
        />

        <div className="favorites-grid">
          {siteData.menuFavorites.map((item, index) => {
            const Icon = icons[index % icons.length];

            return (
              <FadeIn key={item.name} delay={index * 0.04}>
                <article className="favorite-card">
                  <div className="favorite-icon">
                    <Icon />
                  </div>

                  <span>{item.tag}</span>
                  <h3>{item.name}</h3>
                  <p>{item.note}</p>
                </article>
              </FadeIn>
            );
          })}
        </div>

        <div className="menu-consult-note">
          <p>
            Got something specific in mind? Consultations are free. After the
            menu is discussed, a 50% deposit is required to book, with an
            invoice and contract provided. Final payment is due when services
            are rendered.
          </p>

          <a className="btn btn-primary" href={siteData.phoneHref}>
            <LuPhone />
            Call to talk menu
          </a>
        </div>
      </div>
    </section>
  );
}
