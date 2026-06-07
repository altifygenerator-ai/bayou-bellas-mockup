import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";

const galleryImages = [
  {
    src: "/images/truck/bayou-truck.png",
    alt: "Bayou Bella’s food truck in Glenwood",
  },
  {
    src: "/images/gallery/truck-side.png",
    alt: "Bayou Bella’s purple and black food truck",
  },
  {
    src: "/images/gallery/menu=board.jpg",
    alt: "Bayou Bella’s menu board",
  },
  {
    src: "/images/food/food-1.jpg",
    alt: "Bayou Bella’s Cajun food plate",
  },
];

export default function GallerySection() {
  return (
    <section className="section-cream" id="gallery">
      <div className="container">
        <SectionHeading
          eyebrow="Photos"
          title="Purple flames, Cajun plates, and a truck you can spot from the road."
          text="Bayou Bella’s already has a strong visual identity. The truck, logo, menu board, and food photos help new customers know exactly what kind of local flavor they are pulling up for."
          center
        />

        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <FadeIn key={image.src} delay={index * 0.06}>
              <div className={`gallery-card ${index === 0 ? "gallery-card-large" : ""}`}>
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