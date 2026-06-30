import heroImg from "../assets/image.png";

function Home() {
  return (
    <section className="hero">

      <div className="hero-text">
        <h1>Delicious Food Delivered To Your Door</h1>

        <p>
          Fresh meals, fast delivery, and amazing offers every day.
          Explore our menu and satisfy your cravings.
        </p>

        <button>Order Now</button>
      </div>

      <div className="hero-image">
        <img src={heroImg} alt="Delicious food" />
      </div>

    </section>
  );
}

export default Home;