import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import kassidy from "../assets/kassidy.png";
import kilian from "../assets/kilian.png";
import brian from "../assets/brian.png";
import car from "../assets/car.png";

const images = [kassidy, kilian, brian, car];

export const ImageCarousel = () => {
    return (
        <div className="relative h-screen w-full">
            <div className="absolute left-1/3 top-24 z-10 -translate-x-1/2 translate-y-96 transform text-white">
                <div
                    className="text-nowrap text-6xl font-black"
                    style={{
                        textShadow:
                            "0 0 36px rgba(0, 0, 0, 1), 0 0 50px rgba(0, 0, 0, 1)"
                    }}
                >
                    Welcome to Fuck You Fishing!
                </div>
                <div
                    className="text-4xl font-extrabold"
                    style={{
                        textShadow:
                            "0 0 36px rgba(0, 0, 0, 1), 0 0 50px rgba(0, 0, 0, 1)"
                    }}
                >
                    Casting attitude since 1984.
                </div>
            </div>
            <Swiper
                modules={[Autoplay]}
                loop={true}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false
                }}
                speed={1000}
                className="h-full"
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index}>
                        <img src={src} className="h-full w-full object-cover" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
