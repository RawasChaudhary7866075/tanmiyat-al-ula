const rates = [
  {
    trade: "HVAC / AC",
    day: "SAR 150",
    night: "SAR 180/hr · Night",
    note: "07:00–20:00 day rate",
  },

  {
    trade: "Electrical",
    day: "SAR 180",
    night: "SAR 220/hr · Night",
    note: "Senior electrician",
  },

  {
    trade: "Plumbing",
    day: "SAR 150",
    night: "SAR 180/hr · Night",
    note: "Incl. pool systems",
  },

  {
    trade: "Civil & Carpentry",
    day: "SAR 130",
    night: "SAR 155/hr · Night",
    note: "Painting included",
  },

  {
    trade: "Pest Control",
    day: "SAR 130",
    night: "SAR 155/hr · Night",
    note: "Emergency call-out",
  },

  {
    trade: "Camera Systems",
    day: "SAR 130",
    night: "SAR 155/hr · Night",
    note: "Install & service",
  },
];

export default function RatesSection() {
  return (
    <section className="rates-section">

      <div className="rates-inner">

        <span className="rates-eyebrow">
          Extra hours & on-demand
        </span>

        <h2 className="rates-heading">
          Transparent hourly rates
        </h2>

        <p className="rates-subtext">
          All extra work beyond the free first hour
          is billed at these fixed rates. Published
          and never changed without notice.
        </p>

        <div className="rates-grid">

          {rates.map((rate) => (
            <div
              className="rate-card"
              key={rate.trade}
            >

              <p className="rate-trade">
                {rate.trade}
              </p>

              <p className="rate-day">
                {rate.day}

                <small>/hr</small>
              </p>

              <p className="rate-night">
                {rate.night}
              </p>

              <p className="rate-note">
                {rate.note}
              </p>

            </div>
          ))}

        </div>

        <p className="rates-disclaimer">
          All prices exclude VAT (15%). Materials
          billed at cost + 15% handling.
          Minimum call-out is 1 hour.
        </p>

      </div>

    </section>
  );
}