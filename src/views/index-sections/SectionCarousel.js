import React from "react";

// reactstrap components
import {
  Card,
  Container,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import home from 'assets/img/front.jpeg';
import building from 'assets/img/building.jpeg';
import staff from 'assets/img/treatment.jpg';
import garden from 'assets/img/garden.png';
import bed from 'assets/img/bed.png';

const items = [
  {
    src: home,
    altText: "Lighthouse Home",
    caption: "Welcome to Lighthouse Lekki",
  },
  {
    src: building,
    altText: "Lighthouse Building",
    caption: "A home away from home",
  },
  {
    src: staff,
    altText: "24/7 staff on site",
    caption: "Has 24/7 staff on site",
  },
  {
    src: garden,
    altText: "Together we can work to help you see the world differently",
    caption: "Together we can work to help you see the world differently",
  },
  {
    src: bed,
    altText: "With high quality facilities",
    caption: "With high quality facilities",
  },
];

function SectionCarousel() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      <div className="section pt-o" id="carousel" style={{backgroundColor: "#72540663", boxShadow: "box-shadow: -13px 6px 20px 11px rgb(204 197 185 / 50%)"}}>
        <Container >
              <Card className="page-carousel">
                <Carousel
                  activeIndex={activeIndex}
                  next={next}
                  previous={previous}
                  loading="lazy"
                >
                  <CarouselIndicators
                    items={items}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                  />
                  {items.map((item) => {
                    return (
                      <CarouselItem
                        onExiting={onExiting}
                        onExited={onExited}
                        key={item.src}
                        loading="lazy"
                      >
                        <img src={item.src} alt={item.altText} />
                        <CarouselCaption
                          captionText={item.caption}
                          captionHeader=""
                          className="carouselCaptionText"
                        />
                      </CarouselItem>
                    );
                  })}
                  <a
                    className="left carousel-control carousel-control-prev"
                    data-slide="prev"
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      previous();
                    }}
                    role="button"
                  >
                    <span className="fa fa-angle-left" />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="right carousel-control carousel-control-next"
                    data-slide="next"
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      next();
                    }}
                    role="button"
                  >
                    <span className="fa fa-angle-right" />
                    <span className="sr-only">Next</span>
                  </a>
                </Carousel>
              </Card>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionCarousel;
