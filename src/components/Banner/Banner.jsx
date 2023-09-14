import { register } from "swiper/element/bundle";
import { Autoplay } from "swiper/modules";

export default function Banner() {
  register();

  return (
    <swiper-container
      class="absolute top-0 left-0 bg-red-700 animate-move-down z-10 w-screen h-8 continous-slider ease-linear"
      slides-per-view="10"
      loop="true"
      speed="1500"
      autoplay-delay="1"
      autoplay-disable-on-interaction="false"
      modules={[Autoplay]}
    >
      <swiper-slide class="flex items-center justify-center text-slate-100 font-light uppercase">
        Coming Soon
      </swiper-slide>
      <swiper-slide class="flex items-center justify-center text-slate-100 font-light uppercase">
        Coming Soon
      </swiper-slide>
      <swiper-slide class="flex items-center justify-center text-slate-100 font-light uppercase">
        Coming Soon
      </swiper-slide>
      <swiper-slide class="flex items-center justify-center text-slate-100 font-light uppercase">
        Coming Soon
      </swiper-slide>
      <swiper-slide class="flex items-center justify-center text-slate-100 font-light uppercase">
        Coming Soon
      </swiper-slide>
      <swiper-slide class="flex items-center justify-center text-slate-100 font-light uppercase">
        Coming Soon
      </swiper-slide>
      <swiper-slide class="flex items-center justify-center text-slate-100 font-light uppercase">
        Coming Soon
      </swiper-slide>
      <swiper-slide class="flex items-center justify-center text-slate-100 font-light uppercase">
        Coming Soon
      </swiper-slide>
      <swiper-slide class="flex items-center justify-center text-slate-100 font-light uppercase">
        Coming Soon
      </swiper-slide>
      <swiper-slide class="flex items-center justify-center text-slate-100 font-light uppercase">
        Coming Soon
      </swiper-slide>
      <swiper-slide class="flex items-center justify-center text-slate-100 font-light uppercase">
        Coming Soon
      </swiper-slide>
      <swiper-slide class="flex items-center justify-center text-slate-100 font-light uppercase">
        Coming Soon
      </swiper-slide>
      <swiper-slide class="flex items-center justify-center text-slate-100 font-light uppercase">
        Coming Soon
      </swiper-slide>
      <swiper-slide class="flex items-center justify-center text-slate-100 font-light uppercase">
        Coming Soon
      </swiper-slide>
      <swiper-slide class="flex items-center justify-center text-slate-100 font-light uppercase">
        Coming Soon
      </swiper-slide>
      <swiper-slide class="flex items-center justify-center text-slate-100 font-light uppercase">
        Coming Soon
      </swiper-slide>
      <swiper-slide class="flex items-center justify-center text-slate-100 font-light uppercase">
        Coming Soon
      </swiper-slide>
      <swiper-slide class="flex items-center justify-center text-slate-100 font-light uppercase">
        Coming Soon
      </swiper-slide>
      <swiper-slide class="flex items-center justify-center text-slate-100 font-light uppercase">
        Coming Soon
      </swiper-slide>
      <swiper-slide class="flex items-center justify-center text-slate-100 font-light uppercase">
        Coming Soon
      </swiper-slide>
      <swiper-slide class="flex items-center justify-center text-slate-100 font-light uppercase">
        Coming Soon
      </swiper-slide>
      <swiper-slide class="flex items-center justify-center text-slate-100 font-light uppercase">
        Coming Soon
      </swiper-slide>
      <swiper-slide class="flex items-center justify-center text-slate-100 font-light uppercase">
        Coming Soon
      </swiper-slide>
      <swiper-slide class="flex items-center justify-center text-slate-100 font-light uppercase">
        Coming Soon
      </swiper-slide>
    </swiper-container>
  );
}
