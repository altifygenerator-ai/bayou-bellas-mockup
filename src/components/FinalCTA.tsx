import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { LuPhone } from "react-icons/lu";
import FadeIn from "@/components/FadeIn";
import { siteData } from "@/data/site";

export default function FinalCTA() {
  return (
    <section className="final-cta-section">
      <div className="container">
        <FadeIn>
          <div className="final-cta-card">
            <p className="eyebrow">Ready to pull up?</p>
            <h2>Call ahead before the favorites are gone.</h2>
            <p>
              Bayou Bella’s menu changes often and customer favorites can sell
              out. Call ahead or check Facebook for today’s lineup, hours, and
              any sellout updates before you head to the truck.
            </p>

            <div className="btn-row">
              <Link className="btn btn-primary" href={siteData.phoneHref}>
                <LuPhone />
                Call {siteData.phone}
              </Link>

              <Link className="btn btn-secondary" href={siteData.facebookUrl}>
                <FaFacebookF />
                Check Facebook
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
