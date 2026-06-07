import Image from "next/image";
import Link from "next/link";
import { siteData } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bb-footer">
      <div className="bb-footer-wrap">
        <div className="bb-footer-top">
          <div className="bb-footer-brand">
            <Image
              src="/images/logo/logo.png"
              alt="Bayou Bella’s & Biscuits logo"
              width={72}
              height={72}
              className="bb-footer-logo"
            />

            <div>
              <p className="bb-footer-name">Bayou Bella’s & Biscuits</p>
              <p className="bb-footer-tagline">
                Cajun & Creole food truck in Glenwood, Arkansas
              </p>
            </div>
          </div>

          <p className="bb-footer-copy">
            Women-owned, local, and serving rotating Louisiana-style favorites
            from the purple-and-black truck on Hwy 70. Menu changes often, so
            call ahead or check Facebook before you pull up.
          </p>
        </div>

        <div className="bb-footer-links">
          <Link href={siteData.phoneHref}>
            <span>Call ahead</span>
            {siteData.phone}
          </Link>

          <Link href={siteData.emailHref}>
            <span>Email</span>
            {siteData.email}
          </Link>

          <div>
            <span>Hours</span>
            {siteData.hoursShort}
          </div>

          <Link href={siteData.facebookUrl} target="_blank">
            <span>Updates</span>
            Facebook menu posts
          </Link>
        </div>

        <div className="bb-footer-bottom">
          <p>
            © {new Date().getFullYear()} Bayou Bella’s & Biscuits. All rights
            reserved.
          </p>

          <p>
            Website by{" "}
            <Link href="https://hometownwebservicesar.cc" target="_blank">
              Hometown Web Services
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
