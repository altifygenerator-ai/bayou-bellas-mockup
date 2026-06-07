import Link from "next/link";
import { siteData } from "@/data/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <p className="footer-brand">Bayou Bella’s & Biscuits</p>
          <p className="text-small">
            Women-owned Cajun & Creole food truck in Glenwood, Arkansas.
          </p>
        </div>

        <div className="footer-links">
          <Link href={siteData.phoneHref}>{siteData.phone}</Link>
          <Link href={siteData.emailHref}>{siteData.email}</Link>
          <Link href={siteData.facebookUrl}>Facebook</Link>
        </div>
      </div>
    </footer>
  );
}