import Link from "next/link";
import { LuClock, LuMail, LuMapPin, LuPhone } from "react-icons/lu";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";
import { siteData } from "@/data/site";

export default function LocationSection() {
  return (
    <section className="section-cream" id="location">
      <div className="container location-grid">
        <FadeIn>
          <SectionHeading
            eyebrow="Find the truck"
            title="Serving Cajun comfort food in Glenwood."
            text="Bayou Bella’s & Biscuits is parked at 242 Hwy 70 in Glenwood, Arkansas, in the old McGrew’s parking lot. Since the menu can change and favorites can sell out, call ahead or check Facebook before you head over."
          />

          <div className="location-info-card">
            <div>
              <LuMapPin />
              <span>{siteData.address}</span>
            </div>

            <div>
              <LuClock />
              <span>{siteData.hoursShort}</span>
            </div>

            <div>
              <LuPhone />
              <Link href={siteData.phoneHref}>{siteData.phone}</Link>
            </div>

            <div>
              <LuMail />
              <Link href={siteData.emailHref}>{siteData.email}</Link>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.12}>
          <div className="map-style-card">
            <p className="eyebrow">Glenwood, Arkansas</p>
            <h3>242 Hwy 70</h3>
            <p>
              Pull up for Cajun and Creole favorites at the old McGrew’s parking
              lot. Check the latest post or call ahead first so you know what is
              cooking and what has already sold out.
            </p>

            <div className="btn-row">
              <Link className="btn btn-red" href={siteData.phoneHref}>
                Call Ahead
              </Link>

              <Link className="btn btn-secondary" href={siteData.facebookUrl}>
                View Facebook
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
