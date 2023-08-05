import gsap from "gsap";
import { useEffect } from "react";
import TextVisible  from "./TextVisible";
import "./Playground.css";

const Playground = () => {
  useEffect(() => {
    const imgElements = document.querySelectorAll('.box');

    imgElements.forEach((img, index) => {
      const imgAnimationDelay = 0.5 + index * 0.4;

      gsap.to(img, { opacity: 1, duration: 0.5, delay: imgAnimationDelay })
    }); 


    gsap.to(".img-1", { 
      rotation: 4, 
      xPercent: 220, 
      duration: 1, 
      delay: 4.3 });
    gsap.to(".img-2", {
      rotation: -8,
      xPercent: -250,
      duration: 1,
      delay: 4.3,
    });
    gsap.to(".img-3", { 
      rotation: 4, 
      yPercent: 170, 
      duration: 1, 
      delay: 4.3 });
    gsap.to(".img-4", {
      rotation: -8,
      yPercent: -150,
      duration: 1,
      delay: 4.3,
    });
    gsap.to(".img-5", {
      rotation: 12,
      xPercent: -175,
      yPercent: -120,
      duration: 1,
      delay: 4.3,
    });
    gsap.to(".img-6", {
      rotation: -4,
      xPercent: -200,
      yPercent: 125,
      duration: 1,
      delay: 4.3,
    });
    gsap.to(".img-7", {
      rotation: 3,
      xPercent: 220,
      yPercent: 140,
      duration: 1,
      delay: 4.3,
    });
    gsap.to(".img-8", {
      rotation: -8,
      xPercent: 110,
      yPercent: -150,
      duration: 1,
      delay: 4.3,
    });

    gsap.to(".img-1", { opacity: 0, duration: 0.5, delay: 5.5 });
    gsap.to(".img-2", { opacity: 0, duration: 0.5, delay: 5.5 });
    gsap.to(".img-3", { opacity: 0, duration: 0.5, delay: 5.5 });
    gsap.to(".img-4", { opacity: 0, duration: 0.5, delay: 5.5 });
    gsap.to(".img-5", { opacity: 0, duration: 0.5, delay: 5.5 });
    gsap.to(".img-6", { opacity: 0, duration: 0.5, delay: 5.5 });
    gsap.to(".img-7", { opacity: 0, duration: 0.5, delay: 5.5 });
    gsap.to(".img-8", { opacity: 0, duration: 0.5, delay: 5.5 });

    gsap.to(".playground-heading", { opacity: 1, duration: 1.5, delay: 5.9 });
  }, []);

  return (
    <>
      <div className="playground-container">
        <div className="random-images">
          <h1 className="playground-heading">Hi there.</h1>
          <div className="box img-1">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
              alt=""
            />
          </div>
          <div className="box img-2">
            <img
              src="https://images.unsplash.com/photo-1509114397022-ed747cca3f65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
              alt=""
            />
          </div>
          <div className="box img-3">
            <img
              src="https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
              alt=""
            />
          </div>
          <div className="box img-4">
            <img
              src="https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
              alt=""
            />
          </div>
          <div className="box img-5">
            <img
              src="https://images.unsplash.com/photo-1536697246787-1f7ae568d89a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
              alt=""
            />
          </div>
          <div className="box img-6">
            <img
              src="https://images.unsplash.com/photo-1478479474071-8a3014d422c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
              alt=""
            />
          </div>
          <div className="box img-7">
            <img
              src="https://images.unsplash.com/photo-1506555191898-a76bacf004ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
              alt=""
            />
          </div>
          <div className="box img-8">
            <img
              src="https://images.unsplash.com/photo-1610775886581-1140b123cbb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="text-section">
        <h1>The Gap</h1>
        <TextVisible > 
        <p className="text-section-p">
          “Nobody tells this to people who are beginners, I wish someone told
          me. All of us who do creative work, we get into it because we have good
          taste. <br />
          But there is this gap. For the first couple years you make stuff, it’s
          just not that good. It’s trying to be good, it has potential, but it’s
          not. <br />
          But your taste, the thing that got you into the game, is still killer.
          And your taste is why your work disappoints you. <br />
          A lot of people never get past this phase, they quit. Most people I
          know who do interesting, creative work went through years of this.{" "}
          <br />
          We know our work doesn’t have this special thing that we want it to
          have. We all go through this. <br />
          It is only by going through a volume of work that you will close that
          gap, and your work will be as good as your ambitions. <br />
          And I took longer to figure out how to do this than anyone I’ve ever
          met. <br />
          It’s gonna take awhile. It’s normal to take awhile. You’ve just gotta
          fight your way through.” <br /><br />
          - Ira Glass
        </p>
        </TextVisible>
      </div>
    </>
  );
};

export default Playground;
