import React, {useState} from "react";
import './index.css'
const Logo = (props) => {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={50}
            height={50}
            viewBox="0 0 610 409"
            fill={isHovered ? "#F06161" : "black"}  // Change fill color on hover
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            {...props}
        >
            <path d="M9.4 9.7c-1.2.2-3.2 1.5-4.5 2.9-2.3 2.5-2.4 3.1-2.4 18V46l2.8 2.7C8 51.5 8.2 51.5 23.5 52c14.4.5 15.6.7 17.7 2.8l2.3 2.3.5 169.3.5 169.4 2.4 2.6 2.5 2.6 16.4-.2 16.5-.3 2.1-2.8 2.1-2.8.3-154.2c.2-104-.1-156.4-.8-161-1.2-7.6-2.8-11.3-7.3-17-3-3.7-13-9.5-17.1-9.9-1.2-.1 12.2-.5 29.6-.8l31.8-.5 2.7-2.8c2.8-2.7 2.8-2.9 3.1-17 .3-13.5.2-14.4-2-17.7-1.3-1.9-3.4-3.7-4.8-4.1-2.6-.7-109-.9-112.6-.2zM168.2 10.1c-2 .6-4.1 2.3-5.2 4.2-2 3.1-2 6.2-2 180.4 0 124.9.3 178.8 1.1 182.5 2 9.8 8.4 17.9 17.3 21.9 3.8 1.7 7.6 1.9 53.9 1.9 48.2 0 49.8-.1 51.7-2 1.1-1.1 2.2-3 2.5-4.2.3-1.3.4-87.2.3-191L287.5 15l-2.8-2.7-2.7-2.8h-30l-2.7 2.8-2.8 2.7-.5 169.5-.5 169.5-2.8 2.7-2.7 2.8-32.3.2c-32.2.3-32.2.3-27-1.5 7.1-2.5 12.7-6.4 16.3-11.4 6.3-8.7 6 1.3 6-172.5V16l-2.9-3.2-2.9-3.3-12.9-.2c-7-.1-14.3.2-16.1.8zM345.9 10c-6.3 1.1-11.7 4.1-16.5 9.2-5.2 5.4-6.9 8.7-8.3 16.3-1.4 7.6-1.5 331.2-.1 339.8 1.8 11 7.9 19.3 17.5 23.8 3.7 1.7 7.2 1.9 45 1.9 40.9 0 41 0 46-2.4 6.3-2.9 12.6-9.7 15.1-16.2 1.7-4.4 1.9-7.7 1.9-32.2v-27.4l-2.8-2.4c-2.7-2.3-3.4-2.4-17.7-2.4-14.3 0-15 .1-17.7 2.4-2.8 2.4-2.8 2.4-3.3 18-.5 15.4-.5 15.6-3.3 18.3-2.7 2.7-3 2.8-16.5 3.1-15.5.4-18.3-.3-21.2-5-2-3.3-2-5.1-2-140V78.1l-2.2-5.8c-2.9-7.8-9.5-14.6-17.3-17.8l-6-2.5h30.8c19.3 0 31.6.4 32.8 1 3.9 2.1 4.9 6.2 4.9 19.9 0 20.2.9 21.1 20.9 21.1 21.8 0 21.1 1 21.1-32.5 0-28.3-.7-32.4-7-40.4-2.8-3.5-5.9-5.9-10.7-8.3l-6.8-3.3-36-.2c-19.8-.1-38.1.2-40.6.7zM505.5 10c-2.8.4-6.6 1.5-8.5 2.5-5.9 2.9-12.8 10.5-15.3 16.5l-2.2 5.5-.3 166.5c-.2 112.6.1 168.7.8 173.3 1.3 8.8 4.8 15.6 10.3 20.1 8.2 6.7 7.3 6.6 52.4 6.6 40.7 0 40.8 0 45.8-2.4 6.3-2.9 12.6-9.7 15.1-16.2 1.8-4.7 1.9-10.1 1.9-177.4V32.5l-2.1-4.6c-3.2-6.9-8.6-12.3-15.6-15.5l-6.3-2.9-35.5-.2c-19.5-.1-37.8.2-40.5.7zm55.6 44.9 2.9 2.9V353l-2.9 3.2-2.9 3.3-13.9.3c-15.2.4-18.3-.3-21-4.5-1.7-2.6-1.8-10-2.3-141.8l-.5-139-2.4-4.5c-4.6-8.7-8.2-12-17-15.6l-5.6-2.4h62.7l2.9 2.9z" />
        </svg>
    )
}

export default Logo