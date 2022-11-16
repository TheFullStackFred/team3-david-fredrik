const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="profile-card">
        <header>
          <img
            src="https://avatars.githubusercontent.com/u/90246884?v=4"
            alt="Fred"
          />
          <h1>Fredrik Strömberg</h1>

          <h2>DEVELOPER</h2>
        </header>

        <div className="profile-bio">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
            sed unde consectetur! Amet debitis quibusdam pariatur rerum quas
            laboriosam dolorum!
          </p>
        </div>
      </div>

      <div className="profile-card">
        <header>
          <img
            src="https://avatars.githubusercontent.com/u/95115610?v=4"
            alt="David"
          />

          <h1>David Mould</h1>

          <h2>DEVELOPER</h2>
        </header>

        <div className="profile-bio">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
            qui dignissimos doloribus est voluptatem eius unde error laudantium
            amet accusamus?
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
