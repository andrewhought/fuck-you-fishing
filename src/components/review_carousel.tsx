import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import mom from "../assets/3mom.png";
import fish_guy from "../assets/fish_guy.png";
import gogirl_mom from "../assets/gogirl_mom.png";
import gogirl from "../assets/gogirl.png";
import sisterlove from "../assets/sisterlove.png";
import surfer6 from "../assets/surfer6.png";
import yogi from "../assets/yogi.png";

interface Review {
    image: string;
    username: string;
    review: string;
}

const reviews: Review[] = [
    {
        image: mom,
        username: "3Mom",
        review: "\"It was windy, that's all I'm gonna say, I borrow my husband's cap... I run into my daughters' math teacher. Next thing you know we're doing shots, and she's wearing the hat.\""
    },
    {
        image: fish_guy,
        username: "Fish Guy",
        review: '"Funny story; when I wear the shirt, I get less, "Catch anything?" and more, "Hey! where\'d you get that shirt?""'
    },
    {
        image: gogirl,
        username: "GoGirl",
        review: '"My Mom wouldn\'t let me wear it, then I caught her wearing it, (and she was a little bit tipsy, I got video). Anyway, she returned it."'
    },
    {
        image: gogirl_mom,
        username: "GoGirl Mom",
        review: '"I\'m her mom and I got my own."'
    },
    {
        image: sisterlove,
        username: "SisterLove",
        review: '"I\'d never turn my back on my sister."'
    },
    {
        image: surfer6,
        username: "Surfer6",
        review: '"Guy says "Where\'d you get that shirt?" I said "from yo momma." He punched me and took mine right off my back... Good times."'
    },
    {
        image: yogi,
        username: "Yogi",
        review: '"Perfect gear for fishing, riding, or drinking (or all the above). My three favorite past times."'
    }
];

export const ReviewCarousel = () => {
    return (
        <div className="relative mt-8 h-64">
            <Swiper
                spaceBetween={0}
                speed={5000}
                direction={"horizontal"}
                autoplay={{ delay: 0 }}
                loop={true}
                slidesPerView={1}
                freeMode={true}
            >
                {reviews.map((review, index) => (
                    <SwiperSlide key={index}>
                        <div className="mx-12 my-2 flex h-36 items-center">
                            <img
                                className="h-full w-auto rounded-full object-contain"
                                src={review.image}
                            />
                            <div className="ml-4 flex w-40 flex-col justify-center text-left text-sm text-black">
                                <div className="">{review.review}</div>
                                <div className="text-md text-black">
                                    -{review.username}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
