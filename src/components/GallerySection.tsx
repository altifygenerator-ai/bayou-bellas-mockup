import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";

const galleryImages = [
  {
    src: "/images/truck/bayou-truck.png",
    alt: "Bayou Bella’s food truck in Glenwood, Arkansas",
  },
  {
    src: "/images/gallery/truck-side.png",
    alt: "Purple and black Bayou Bella’s food truck",
  },
  {
    src: "/images/gallery/menu-board.jpg",
    alt: "Bayou Bella’s daily menu board",
  },
  {
    src: "/images/food/food-1.jpg",
    alt: "Cajun food from Bayou Bella’s",
  },
];

export default function GallerySection() {
  return (
    <section className="section-dark" id="gallery">
      <div className="container">
        <SectionHeading
          eyebrow="Photos"
          title="Find the purple flames and follow the smell of Cajun cooking."
          text="Pull up to the purple-and-black truck on Hwy 70, check the board, and see what’s cooking before the day’s favorites are gone."
          center
        />

        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <FadeIn key={image.src} delay={index * 0.06}>
              <div
                className={`gallery-card ${
                  index === 0 ? "gallery-card-large" : ""
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={900}
                  height={700}
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}