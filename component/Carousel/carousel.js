function Carousel() {
  return (
    <div>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <p>First Coursel</p>
          </div>
          <div className="carousel-item">
            <p>Second Coursel</p>
          </div>
          <div className="carousel-item">
            <p>Third Coursel</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
