interface Props {
  id?: string;

  title: string;
  subtitle: string;
  description: string;

  image: string;

  features: string[];

  buttonText: string;
}

export default function ServiceDarkSection({
  id,

  title,
  subtitle,
  description,

  image,

  features,

  buttonText,
}: Props) {
  return (
    <section id={id} className="service-section dark">
      <div className="service-grid">
        <div
          className="service-image"
          style={{
            backgroundImage: `url(${image})`,
          }}
        />

        <div className="service-content">
          <span>{subtitle}</span>

          <div className="service-top-row">
            <h2>{title}</h2>

            <button className="service-btn">
              {buttonText}

              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>

          <p>{description}</p>

          <div className="service-features">
            {features.map((feature) => (
              <div key={feature} className="service-feature">
                <div className="service-feature-icon">
                  <i className="fa-solid fa-star"></i>
                </div>

                <span>{feature}</span>
              </div>
            ))}
          </div>

          <div className="service-bottom-bar">
            <div className="service-stat">
              <span>Response Time</span>

              <strong>4 - 24 hrs</strong>
            </div>

            <div className="service-stat">
              <span>Preventive Visits</span>

              <strong>Quarterly</strong>
            </div>

            <div className="service-stat">
              <span>Available In Plans</span>

              <strong>Silver, Gold, Platinum</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}