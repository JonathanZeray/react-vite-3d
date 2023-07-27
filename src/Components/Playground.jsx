import "./Playground.css"
import { Carousel } from "./Carousel";
import gsap from "gsap";
import { useEffect } from "react";

const Playground = () => {
useEffect(() => {
  gsap.to(".img-1", {opacity: 1, duration: 0.5, delay: 0.5})
  gsap.to(".img-2", {opacity: 1, duration: 0.5, delay: 1.2})
  gsap.to(".img-3", {opacity: 1, duration: 0.5, delay: 1.8})
  gsap.to(".img-4", {opacity: 1, duration: 0.5, delay: 2.1})
  gsap.to(".img-5", {opacity: 1, duration: 0.5, delay: 2.4})
  gsap.to(".img-6", {opacity: 1, duration: 0.5, delay: 2.7})
  gsap.to(".img-7", {opacity: 1, duration: 0.5, delay: 3.1})
  gsap.to(".img-8", {opacity: 1, duration: 0.5, delay: 3.4})
  
  
  gsap.to(".img-1", {rotation: 4, xPercent: 150,  duration: 1, delay: 4.3});
  gsap.to(".img-2", {rotation: -8, xPercent: -250,  duration: 1, delay: 4.3});
  gsap.to(".img-3", {rotation: 4, yPercent: 100,  duration: 1, delay: 4.3});
  gsap.to(".img-4", {rotation: -8, yPercent: -150,  duration: 1, delay: 4.3});
  gsap.to(".img-5", {rotation: 12, xPercent: -185, yPercent: -150,  duration: 1, delay: 4.3});
  gsap.to(".img-6", {rotation: -4, xPercent: -200 , yPercent: 60,  duration: 1, delay: 4.3});
  gsap.to(".img-7", {rotation: 3, xPercent: 120, yPercent: 70,  duration: 1, delay: 4.3});
  gsap.to(".img-8", {rotation: -8, xPercent: 80, yPercent: -150,  duration: 1, delay: 4.3});
  
  gsap.to(".img-1", {opacity: 0, duration: 0.5, delay: 5.5})
  gsap.to(".img-2", {opacity: 0, duration: 0.5, delay: 5.5})
  gsap.to(".img-3", {opacity: 0, duration: 0.5, delay: 5.5})
  gsap.to(".img-4", {opacity: 0, duration: 0.5, delay: 5.5})
  gsap.to(".img-5", {opacity: 0, duration: 0.5, delay: 5.5})
  gsap.to(".img-6", {opacity: 0, duration: 0.5, delay: 5.5})
  gsap.to(".img-7", {opacity: 0, duration: 0.5, delay: 5.5})
  gsap.to(".img-8", {opacity: 0, duration: 0.5, delay: 5.5})

  gsap.to(".playground-heading", {opacity: 1, duration: 1.5, delay: 5.9})
  
}, [])

  return (
  <>
  <div className="playground-container">
    <div className="random-images"> 
    <h1 className="playground-heading">Hi there.</h1>
    <div className="box img-1"><img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" /></div>
    <div className="box img-2"><img src="https://images.unsplash.com/photo-1509114397022-ed747cca3f65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" /></div>
    <div className="box img-3"><img src="https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" /></div>
    <div className="box img-4"><img src="https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" /></div>
    <div className="box img-5"><img src="https://images.unsplash.com/photo-1536697246787-1f7ae568d89a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" /></div>
    <div className="box img-6"><img src="https://images.unsplash.com/photo-1478479474071-8a3014d422c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" /></div>
    <div className="box img-7"><img src="https://images.unsplash.com/photo-1506555191898-a76bacf004ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" /></div>
    <div className="box img-8"><img src="https://images.unsplash.com/photo-1610775886581-1140b123cbb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" /></div>
    </div>
  </div>
  </>
  );
};

export default Playground;
