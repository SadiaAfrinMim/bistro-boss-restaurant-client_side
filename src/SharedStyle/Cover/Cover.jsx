import React from 'react';
import { Parallax } from 'react-parallax';

const Cover = ({img,title}) => {
    return (
        <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
    >
         <div>
            <div
  className="hero h-[700px] min-h-screen"
  style={{
    backgroundImage: `url(${img})`,
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md bg-black opacity-70 p-12">
      <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
      <p className="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
            
        </div>
    </Parallax>
      
    );
};

export default Cover;