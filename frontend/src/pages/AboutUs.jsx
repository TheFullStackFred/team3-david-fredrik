const AboutUs = () => {
  return (
    //     <>
    //       <div className="about-section">
    //         <h1>About Us</h1>
    //         <p>Some text about who we and what we do should go here.</p>
    //       </div>

    //       <h2>Our Team</h2>
    //       <div className="about-column">
    //         <div className="about-card">
    //   <img
    //     src="https://avatars.githubusercontent.com/u/90246884?v=4"
    //     alt="Fred"
    //   />
    //           <div className="about-container">
    //             <h2>Fredrik Strömberg</h2>
    //             <p className="about-title">FullStack Developer</p>
    //             <p className="lorem-text">
    //               Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //               Repudiandae amet at commodi nesciunt perspiciatis. Molestias, ab
    //               esse iste dolor voluptates minima. Sapiente tempore nemo officiis
    //               dignissimos cumque repellat nam rem.
    //             </p>
    //             <p>fred@storytime.se</p>
    //             <p>
    //               <button className="about-button">Contact Me</button>
    //             </p>
    //           </div>
    //         </div>
    //       </div>

    //       <div className="about-column">
    //         <div className="about-card">
    //   <img
    //     src="https://avatars.githubusercontent.com/u/95115610?v=4"
    //     alt="David"
    //   />
    //           <div className="about-container">
    //             <h2>David Mould</h2>
    //             <p className="about-title">JavaScript Developer</p>
    //             <p className="lorem-text">
    //               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
    //               ipsum maiores omnis nostrum praesentium atque esse enim veniam
    //               veritatis iste? Harum tempora, minus magni atque minima cum
    //               voluptate possimus perspiciatis!
    //             </p>
    //             <p>david@storytime.com</p>
    //             <p>
    //               <button className="about-button">Contact Me</button>
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </>

    <section className="about-us">
      <div class="profile-card">
        <header>
          <img
            src="https://avatars.githubusercontent.com/u/90246884?v=4"
            alt="Fred"
          />
          <h1>Fredrik Strömberg</h1>

          <h2>DEVELOPER</h2>
        </header>

        <div class="profile-bio">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
            sed unde consectetur! Amet debitis quibusdam pariatur rerum quas
            laboriosam dolorum!
          </p>
        </div>
      </div>

      <div class="profile-card">
        <header>
          <img
            src="https://avatars.githubusercontent.com/u/95115610?v=4"
            alt="David"
          />

          <h1>David Mould</h1>

          <h2>DEVELOPER</h2>
        </header>

        <div class="profile-bio">
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
