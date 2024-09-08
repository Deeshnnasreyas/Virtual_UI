import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Virtual build Tools
        <span
          className="bg-gradient-to-r from-orange-500 to-orange-800
              text-transparent bg-clip-text"
        >
          {""} for Developer
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis rerum
        nam facilis ipsum dolores possimus pariatur architecto veniam fuga
        aliquid cum voluptatibus minus assumenda molestias repudiandae labore
        hic, quia vel!
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-400 to-orange-900 rounded-lg py-3 px-4 mx-3"
        >
          Start for Free
        </a>
        <a href="#" className="border rounded-lg py-3 px-4 mx-3">
          Documentation
        </a>
      </div>
      <div className="flex justify-center mt-10">
        <video
          autoPlay
          muted
          loop
          className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser not suppprt the video tag
        </video>
        <video
          autoPlay
          muted
          loop
          className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser not suppprt the video tag
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
