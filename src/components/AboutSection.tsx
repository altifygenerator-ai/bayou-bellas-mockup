import Image from "next/image";
import { LuHeartHandshake, LuSparkles } from "react-icons/lu";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";

export default function AboutSection() {
  return (
    <section className="section-dark">
      <div className="container about-grid">
        <FadeIn>
          <div className="about-image-card">
            <Image
              src="/images/logo/logo.png"
              alt="Bayou Bella’s & Biscuits logo"
              width={700}
              height={700}
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.12}>
          <SectionHeading
            eyebrow="About Bayou Bella’s"
            title="Two ladies swinging pots and slayin’ food."
            text="Bayou Bella’s & Biscuits brings authentic Louisiana Creole and Cajun cuisine to Glenwood with a purple-and-black food truck, a bold rotating menu, and the kind of local personality that stands out before you even take the first bite."
          />

          <div className="about-points">
            <div>
              <LuSparkles />
              <strong>Big food truck personality</strong>
              <p>
                From the fleur-de-lis and purple flames to the daily menu posts,
                Bayou Bella’s has a look and voice people remember.
              </p>
            </div>

            <div>
              <LuHeartHandshake />
              <strong>Local and women-owned</strong>
              <p>
                Based in Glenwood, Arkansas, Bayou Bella’s is a women-owned food
                truck serving Cajun and Creole comfort food with a friendly
                call-ahead setup.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}