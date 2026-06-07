import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { LuFlame, LuPhone, LuSparkles } from "react-icons/lu";
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
            title="Fresh posts, daily specials, and custom menus worth asking about."
            text="Bayou Bella’s keeps the food truck menu moving with Cajun favorites, Louisiana-style plates, Southern comfort food, and daily specials that can sell out quick. Check Facebook for the latest lineup, or call ahead if you have your eye on something."
          />

          <div className="menu-quote-card">
            <LuSparkles />
            <div>
              <strong>
                “You can pretty much get anything you want with a consultation.”
              </strong>
              <p>
                That is how Bayou Bella’s talks about custom cooking. If it is
                edible, legal, and morally fit, there is a good chance they can
                make it happen. Consultations are free, and custom bookings are
                handled with an invoice, contract, and deposit.
              </p>
            </div>
          </div>

          <div className="btn-row" style={{ marginTop: "1.7rem" }}>
            <Link className="btn btn-red" href={siteData.phoneHref}>
              <LuPhone />
              Call Ahead
            </Link>

            <Link
              className="btn btn-secondary dark-text-btn"
              href={siteData.facebookUrl}
            >
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

            <h3>Check the post. Call ahead. Pull up hungry.</h3>

            <ul>
              <li>Open {siteData.hours}</li>
              <li>Menu updates and sellouts are posted on Facebook</li>
              <li>Call ahead at {siteData.phone}</li>
              <li>Located at 242 Hwy 70 in the old McGrew’s parking lot</li>
            </ul>

            <p>
              Recent menu posts have included shrimp, okra and sausage gumbo,
              fried rice, alligator boudin links, jambalaya fries, boudin
              cornbread, garlic butter biscuits, wings, and banana pudding.
              For events, bigger meals, or special requests, call and talk
              through what you have in mind.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}