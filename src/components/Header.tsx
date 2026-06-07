import Image from "next/image";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { siteData } from "@/data/site";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="logo-mark" aria-label={`${siteData.name} home`}>
          <span className="logo-badge">
            <Image
              src={siteData.logoImage}
              alt={`${siteData.name} logo`}
              width={92}
              height={92}
            />
          </span>

          <span className="logo-text">
            <strong>Bayou Bella’s</strong>
            <span>Food Truck · Glenwood</span>
          </span>
        </Link>

        <nav className="nav-links" aria-label="Main navigation">
          {siteData.nav.map((item) => (
            <Link href={item.href} key={item.label}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="btn-row">
          <Link className="btn btn-secondary" href={siteData.facebookUrl}>
            <FaFacebookF />
            Facebook
          </Link>

          <Link className="btn btn-primary" href={siteData.phoneHref}>
            Call Ahead
          </Link>
        </div>
      </div>
    </header>
  );
}