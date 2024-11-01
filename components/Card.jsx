// Import Intersection Observer from react-intersection-observer (optional but helps simplify)
import { useInView } from 'react-intersection-observer';

const Card = ({ imageUrl, title, subtitle, description }) => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger when 10% of the card is visible
    triggerOnce: true, // Only trigger the animation once
  });

  return (
    <article ref={ref} className={`card ${inView ? 'visible' : ''}`}>
      <div
        className="card__img"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="card__info">
        <h2 className="card__title">{title}</h2>
        <h4>{subtitle}</h4>
        <p className="card__by">{description}</p>
      </div>
    </article>
  );
};

export default function CardsSection() {
  return (
    <section className="cards ms-auto me-auto mt-5 mb-5">
      <Card
        imageUrl="../images/jane.png"
        title="Jane AI"
        subtitle="Your Digital Workforce Partner"
        description="A customizable AI persona with voice and hearing, designed to augment your team and transform operations."
      />
      <Card
        imageUrl="../images/quickscan.png"
        title="QuickScan Engine"
        subtitle="Advanced Security Auditing"
        description="Leverage AI-driven insights to audit security plans and attain unmatched compliance ratings."
      />
      <Card
        imageUrl="../images/animate.png"
        title="Animate"
        subtitle="Cyber Range Traffic Generator"
        description="Bring life to your cyber research and training missions with dynamic behavior and traffic generation."
      />
    </section>
  );
}
