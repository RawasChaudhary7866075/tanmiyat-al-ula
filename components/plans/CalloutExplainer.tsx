export default function CalloutExplainer() {
  return (
    <section className="callout-section">

      <div className="callout-inner">

        <span className="callout-eyebrow">
          PPM vs reactive - what&apos;s the difference?
        </span>

        <h2 className="callout-heading">
          Two types of visits, clearly explained
        </h2>

        <p className="callout-subtext">
          Your subscription covers both. It helps to know
          how each works.
        </p>

        <div className="callout-grid">

          {/* PPM BOX */}

          <div className="callout-box">

            <div className="callout-box-title">

              <div className="callout-box-icon ppm-icon">
                📋
              </div>

              <span>
                Planned Preventive Maintenance (PPM)
              </span>

            </div>

            <div className="callout-box-row">
              <span>When</span>

              <strong>
                Scheduled - 2 or 4×/year
              </strong>
            </div>

            <div className="callout-box-row">
              <span>Purpose</span>

              <strong>
                Inspect, service, prevent failures
              </strong>
            </div>

            <div className="callout-box-row">
              <span>Duration</span>

              <strong>
                2-3 hours, all systems
              </strong>
            </div>

            <div className="callout-box-row">
              <span>Cost to you</span>

              <strong>
                Included in subscription
              </strong>
            </div>

            <div className="callout-box-row">
              <span>Output</span>

              <strong>
                Photo report + recommendations
              </strong>
            </div>

          </div>

          {/* REACTIVE BOX */}

          <div className="callout-box">

            <div className="callout-box-title">

              <div className="callout-box-icon reactive-icon">
                ⚡
              </div>

              <span>
                Reactive Callout
              </span>

            </div>

            <div className="callout-box-row">
              <span>When</span>

              <strong>
                Something breaks or fails
              </strong>
            </div>

            <div className="callout-box-row">
              <span>Purpose</span>

              <strong>
                Fix the specific problem
              </strong>
            </div>

            <div className="callout-box-row">
              <span>First hour</span>

              <strong>
                Free (within your callout allowance)
              </strong>
            </div>

            <div className="callout-box-row">
              <span>Extra hours</span>

              <strong>
                SAR 120-180/hr (published rate)
              </strong>
            </div>

            <div className="callout-box-row">
              <span>Response</span>

              <strong>
                4-24 hrs depending on plan
              </strong>
            </div>

          </div>

        </div>

        <div className="callout-note">

          <strong>
            How materials work:
          </strong>

          {" "}

          PPM visits include all consumables and minor
          parts up to your plan&apos;s cap - AC filters,
          sealants, fittings, small components.

          Reactive callouts include minor parts up to
          a smaller cap.

          Any major component
          (pump, AC unit, water heater, pipe section)
          is quoted and approved by you first -
          nothing is ordered without your sign-off.

          This protects you from surprise bills while
          keeping small jobs completely seamless.

        </div>

      </div>

    </section>
  );
}