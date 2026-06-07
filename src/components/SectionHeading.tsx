type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  text?: string;
  center?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  text,
  center = false,
}: SectionHeadingProps) {
  return (
    <div className={center ? "section-center" : undefined}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title-sm">{title}</h2>
      {text ? <p className="section-lead">{text}</p> : null}
    </div>
  );
}