import heroImg from './assets/hero.svg'
const Hero = () => {
  return <section className="hero">
    <div className="hero-center">
        <div className="hero-title">
            <h1>Contentful CMS</h1>
            <p>
              I am baby tonx brunch four loko, hot chicken cliche taxidermy chartreuse af leggings celiac mixtape bespoke hexagon pop-up craft beer. Mukbang slow-carb offal vinyl thundercats, selfies messenger bag dreamcatcher art party letterpress YOLO.  
            </p>
        </div>
        <div className="img-container">
            <img src= {heroImg} alt="woman and the browser" />
        </div>
    </div>

  </section>
}

export default Hero