import { useEffect } from "react";

declare interface CommonOption {
  /** Nombre de slide visible 
   * @default 1
  */
  slides?: number
  /** Defilement par scroll
   * @default 1
   */
  scroll?: number
}

type CarouselProps = {
  elements: JSX.Element,
  option?: CommonOption,
}

const Carousel = ({elements, option}: CarouselProps) => {

  // eslint-disable-next-line
  function getSlides(numberOfSlides: number = 1) {
    
  }

  useEffect(() => {
    getSlides(option?.slides);
  });

  return(
    <div className="carousel container">Carousel
    </div>
  );
}

export default Carousel