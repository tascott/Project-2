import "../../scss/style.css";

function Home() {
  return (
    <>
      <header className="home-header">
        <h1>Web Garage</h1>
        <h2>
          Streamline your front-end development projects and team management
        </h2>
      </header>

      <section className="feature">
        <div className="feature-img team"></div>
        <div className="feature-text">
          <h2>Team</h2>
          <p>
            Our platform makes it easy to manage your team members, regardless
            of their location. View detailed profiles, gain insights into their
            availability, and access information on their local weather and
            public holidays.
            <span>
              Foster a collaborative environment and make informed decisions
              before reaching out.
            </span>
          </p>
        </div>
      </section>

      <section className="feature">
        <div className="feature-text">
          <h2>Generate</h2>
          <p>
            Say goodbye to tedious manual invoicing. Our user-friendly invoice
            generator allows you to create professional invoices tailored to
            your clients' needs.
            <span>
              Customize your invoices, preview them, and generate them in just a
              few clicks. Let us handle the paperwork while you focus on what
              you do best.
            </span>
          </p>
        </div>
        <div className="feature-img generate"></div>
      </section>

      <section className="feature">
        <div className="feature-img projects"></div>
        <div className="feature-text">
          <h2>Projects</h2>
          <p>
            Stay on top of your ongoing projects with our comprehensive project
            management system. Organize tasks, set deadlines, and track
            progress, all in one place.
            <span>
              Communicate seamlessly with clients through our integrated message
              board, ensuring everyone is aligned and up-to-date on project
              developments.
            </span>
          </p>
        </div>
      </section>
    </>
  );
}

export default Home;
