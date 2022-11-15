import React from 'react'

const AboutUs = () => {
  return (
    <>
<div class="about-section">
  <h1>About Us</h1>
  <p>Some text about who we and what we do should go here.</p>
</div>

<h2>Our Team</h2>
  <div class="about-column">
    <div class="about-card">
      <img src="https://avatars.githubusercontent.com/u/90246884?v=4" alt="Fred"
      />
      <div class="about-container">
        <h2>Fredrik Strömberg</h2>
        <p class="about-title">FullStack Developer</p>
        <p class="lorem-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae amet at commodi nesciunt perspiciatis. Molestias, ab esse iste dolor voluptates minima. Sapiente tempore nemo officiis dignissimos cumque repellat nam rem.</p>
        <p>fred@storytime.se</p>
        <p><button class="about-button">Contact Me</button></p>
      </div>
    </div>
  </div>

  <div class="about-column">
    <div class="about-card">
      <img src="https://avatars.githubusercontent.com/u/95115610?v=4" alt="David" />
      <div class="about-container">
        <h2>David Mould</h2>
        <p class="about-title">JavaScript Developer</p>
        <p class="lorem-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ipsum maiores omnis nostrum praesentium atque esse enim veniam veritatis iste? Harum tempora, minus magni atque minima cum voluptate possimus perspiciatis!</p>
        <p>david@storytime.com</p>
        <p><button class="about-button">Contact Me</button></p>
      </div>
    </div>
  </div>
    </>
  )
}

export default AboutUs
