import { Card } from "./components/card";
import { ImageCarousel } from "./components/image_carousel";
import { MenuBar } from "./components/menu_bar";
import tees from "./assets/tees.png";
import caps from "./assets/caps.png";
import hoodies from "./assets/hoodies.png";
import { ReviewCarousel } from "./components/review_carousel";

export const App = () => {
    return (
        <>
            <MenuBar />
            <ImageCarousel />
            <div className="flex flex-row justify-center px-8 py-6">
                <Card image={tees} title="tees" />
                <Card image={caps} title="caps" />
                <Card image={hoodies} title="hoodies" />
            </div>
            <div className="font-hurricane my-5 text-center text-5xl font-black text-black">
                So many ways to say "Fuck you!"
            </div>
            <ReviewCarousel />
        </>
    );
};
