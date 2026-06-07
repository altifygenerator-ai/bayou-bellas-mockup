import Image from "next/image";
import Link from "next/link";
import { LuClock, LuMapPin, LuPhone, LuStar } from "react-icons/lu";
import FadeIn from "@/components/FadeIn";
import { siteData } from "@/data/site";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container hero-grid">
        <FadeIn className="hero-copy">
          <p className="eyebrow">Authentic Louisiana Creole & Cajun Cuisine</p>

          <h1 className="hero-title">
            Big Cajun flavor <span>rolling through Glenwood.</span>
          </h1>

          <p className="hero-text">
            Bayou Bella’s & Biscuits serves Louisiana-style comfort food from a
            women-owned food truck in Glenwood, Arkansas. The menu changes, the
            favorites move fast, and calling ahead is always a good idea.
          </p>

          <div className="btn-row hero-actions">
            <Link className="btn btn-primary" href={siteData.phoneHref}>
              <LuPhone />
              Call Ahead
            </Link>

            <Link className="btn btn-secondary" href="#menu">
              See Menu Info
            </Link>

            <Link className="btn btn-secondary" href="#location">
              <LuMapPin />
              Find the Truck
            </Link>
          </div>

          <p className="hero-note">
            Located at {siteData.address} in the old McGrew’s parking lot. Check
            Facebook or call ahead for today’s menu before you pull up.
          </p>

          <div className="hero-badge-row">
            <span className="badge badge-gold">
              <LuStar />
              100% Recommended
            </span>
            <span className="badge">10 Facebook Reviews</span>
            <span className="badge badge-red">
              <LuClock />
              {siteData.hoursShort}
            </span>
          </div>
        </FadeIn>

        <FadeIn className="hero-media" delay={0.12}>
          <div className="hero-image-card">
            <Image
              src={siteData.heroImage}
              alt="Bayou Bella’s & Biscuits food truck in Glenwood, Arkansas"
              width={900}
              height={1000}
              priority
            />
          </div>

          <div className="hero-floating-card">
            <strong>Menu moves fast.</strong>
            <p>
              Recent lineups have included gumbo, jambalaya fries, alligator
              boudin links, wings, boudin cornbread, garlic butter biscuits,
              fried rice, and banana pudding.
            </p>

            <div className="hero-badge-row">
              <span className="badge badge-gold">Gumbo</span>
              <span className="badge badge-red">Jambalaya Fries</span>
              <span className="badge">Boudin Cornbread</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
