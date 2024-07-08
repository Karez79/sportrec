import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import './Slider.css';
import bannerImage from '../../assets/bannermain.svg';
const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [bannerImage, bannerImage, bannerImage];
    const slideInterval = 3000; // Интервал переключения слайдов в миллисекундах
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, slideInterval);
        return () => clearInterval(interval);
    }, [slides.length]);
    const goToSlide = (index) => {
        setCurrentSlide(index);
    };
    return (_jsxs("div", { className: "slider-container", children: [_jsx("div", { className: "slider-wrapper", style: { transform: `translateX(-${currentSlide * 100}%)` }, children: slides.map((slide, index) => (_jsx("div", { className: "slide", children: _jsx("img", { src: slide, alt: `Slide ${index}`, className: "slider-image" }) }, index))) }), _jsx("div", { className: "slider-dots-container", children: _jsx("div", { className: "slider-dots", children: slides.map((_, index) => (_jsx("div", { className: `slider-dot ${currentSlide === index ? 'active' : ''}`, onClick: () => goToSlide(index) }, index))) }) })] }));
};
export default Slider;
