interface CardProps {
    title?: string;
    image?: string;
}

export const Card = (props: CardProps) => {
    const { title, image } = props;

    return (
        <div className="relative h-auto w-96 mx-2 cursor-pointer transition-transform duration-300 hover:translate-y-[-4px]">
            {title ? (
                <div
                    className="absolute bottom-0 left-2 z-10 text-6xl font-extrabold text-white"
                    style={{
                        textShadow:
                            "0 0 36px rgba(0, 0, 0, 1), 0 0 50px rgba(0, 0, 0, 1)"
                    }}
                >
                    {title}
                </div>
            ) : null}
            <img src={image} className="object-cover" />
        </div>
    );
};
