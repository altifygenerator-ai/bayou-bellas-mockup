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
        title="Deux ladies swinging pots and slayin’ food."
        text="Bayou Bella’s & Biscuits brings Louisiana Creole and Cajun cooking to Glenwood from the purple-and-black food truck at 242 Hwy 70. The menu changes often, the favorites can sell out quick, and calling ahead is always a good idea if you have your eye on something."
      />

      <div className="about-points">
        <div>
          <LuSparkles />
          <strong>Big flavor, no boring food</strong>
          <p>
            From gumbo and jambalaya fries to boudin cornbread, wings, garlic
            butter biscuits, banana pudding, and rotating daily specials, Bayou
            Bella’s keeps the menu fun and full of Louisiana flavor.
          </p>
        </div>

        <div>
          <LuHeartHandshake />
          <strong>Local, friendly, and women-owned</strong>
          <p>
            Based in Glenwood, Arkansas, Bayou Bella’s is known for good food,
            big portions, friendly service, and the kind of menu people check
            on before they pull up.
          </p>
        </div>
      </div>
    </FadeIn>
  </div>
</section>
  );
}
