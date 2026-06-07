import { LuClock, LuMapPin, LuPhone, LuStar, LuUserRoundCheck } from "react-icons/lu";
import FadeIn from "@/components/FadeIn";
import { siteData } from "@/data/site";

const trustItems = [
  {
    icon: LuStar,
    label: "100% Recommended",
    text: "10 Facebook reviews",
  },
  {
    icon: LuUserRoundCheck,
    label: "Women-Owned",
    text: "Local Glenwood food truck",
  },
  {
    icon: LuMapPin,
    label: "Find Us",
    text: "242 Hwy 70",
  },
  {
    icon: LuClock,
    label: "Hours",
    text: siteData.hoursShort,
  },
  {
    icon: LuPhone,
    label: "Call Ahead",
    text: siteData.phone,
  },
];

export default function TrustStrip() {
  return (
    <section className="trust-strip">
      <div className="container">
        <FadeIn>
          <div className="trust-grid trust-grid-five">
            {trustItems.map((item) => {
              const Icon = item.icon;

              return (
                <div className="trust-item" key={item.label}>
                  <div className="trust-icon">
                    <Icon />
                  </div>

                  <div>
                    <strong>{item.label}</strong>
                    <span>{item.text}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
