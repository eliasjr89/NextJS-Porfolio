export interface SlideData {
  title: string;
  button: string;
  src: string;
  url: string;
}

export interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
}

export interface CarouselProps {
  slides: SlideData[];
}

export interface CarouselControlProps {
  type: string;
  title: string;
  handleClick: () => void;
}
