 import tour1 from '../images/tour-1.jpg'
 import tour2 from '../images/tour-2.jpg'
 import tour3 from '../images/tour-3.jpg'
 import tour4 from '../images/tour-4.jpg'
 
 const Tours = () => {
  return (
    <section className="section" id="tours">
      <div className="section-title">
        <h2>featured <span>tours</span></h2>
      </div>

      <div className="section-center featured-center">
        <article className="tour-card">
          <div className="tour-img-container">
            <img src={tour1} className="tour-img" alt="" />
            <p className="tour-date">august 26th, 2025</p>
          </div>
          <div className="tour-info">
            <div className="tour-title">
              <h4>Serengeti Adventure</h4>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.
            </p>
            <div className="tour-footer">
              <p>
                <span><i className="fas fa-map"></i></span> tanzania
              </p>
              <p>6 days</p>
              <p>from $2100</p>
            </div>
          </div>
        </article>

        <article className="tour-card">
          <div className="tour-img-container">
            <img src={tour2} className="tour-img" alt="" />
            <p className="tour-date">october 1th, 2025</p>
          </div>
          <div className="tour-info">
            <h4>best of Kruger National Park</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.
            </p>
            <div className="tour-footer">
              <p>
                <span><i className="fas fa-map"></i></span> South Africa
              </p>
              <p>11 days</p>
              <p>from $1400</p>
            </div>
          </div>
        </article>

        <article className="tour-card">
          <div className="tour-img-container">
            <img src={tour3} className="tour-img" alt="" />
            <p className="tour-date">september 15th, 2025</p>
          </div>
          <div className="tour-info">
            <h4>explore Etosha</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.
            </p>
            <div className="tour-footer">
              <p>
                <span><i className="fas fa-map"></i></span> Namibia 
              </p>
              <p>8 days</p>
              <p>from $5000</p>
            </div>
          </div>
        </article>

        <article className="tour-card">
          <div className="tour-img-container">
            <img src={tour4} className="tour-img" alt="" />
            <p className="tour-date">december 5th, 2025</p>
          </div>
          <div className="tour-info">
            <h4>kenya highlights</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.
            </p>
            <div className="tour-footer">
              <p>
                <span><i className="fas fa-map"></i></span> kenya
              </p>
              <p>20 days</p>
              <p>from $3300</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
export default Tours;
