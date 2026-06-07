import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { LuFlame, LuPhone } from "react-icons/lu";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";
import { siteData } from "@/data/site";

export default function RotatingMenu() {
  return (
    <section className="section-cream" id="menu">
      <div className="container rotating-menu-grid">
        <FadeIn>
          <SectionHeading
            eyebrow="Rotating menu"
            title="Fresh posts. Daily specials. Call before it’s gone."
            text="Bayou Bella’s menu changes often with Cajun and Creole favorites, daily specials, and items that can sell out before closing. Check the latest Facebook post or call ahead for today’s lineup."
          />

          <div className="btn-row" style={{ marginTop: "1.7rem" }}>
            <Link className="btn btn-red" href={siteData.phoneHref}>
              <LuPhone />
              Call Ahead
            </Link>

            <Link className="btn btn-secondary dark-text-btn" href={siteData.facebookUrl}>
              <FaFacebookF />
              Check Facebook
            </Link>
          </div>
        </FadeIn>

        <FadeIn delay={0.12}>
          <div className="menu-board-card">
            <div className="menu-board-top">
              <span>Today’s Menu</span>
              <LuFlame />
            </div>

            <h3>Check the board. Call ahead. Pull up hungry.</h3>

            <ul>
              <li>Menu updates are posted on Facebook</li>
              <li>Favorites may sell out during the day</li>
              <li>Call ahead at {siteData.phone}</li>
              <li>Rotating Cajun & Creole comfort food</li>
            </ul>

            <p>
              Recent menu posts have included gumbo, jambalaya fries, wings,
              boudin cornbread, Cajun boiled eggs, shrimp Alfredo, crawfish
              étouffée, Cajun chicken salad sandwiches, potato salad, and bread
              pudding.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}