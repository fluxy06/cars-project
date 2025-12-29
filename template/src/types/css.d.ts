declare module '*.css';
declare module '*.scss';
declare module '*.sass';
declare module "*.svg" {
  import React from "react";
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

declare module "*.svg?url" {
  const content: string;
  export default content;
}
declare module 'swiper/css';
declare module 'swiper/css/navigation';
declare module 'swiper/css/pagination';
declare module 'swiper/css/scrollbar';
declare module 'swiper/css/effect-coverflow';
declare module 'swiper/css/effect-cube';
declare module 'swiper/css/effect-fade';
declare module 'swiper/css/effect-flip';
declare module 'swiper/css/effect-cards';