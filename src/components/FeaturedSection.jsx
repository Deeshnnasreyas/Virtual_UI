import { features } from "../constants/index.jsx";
const FeaturedSection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 font-medium rounded-full h-6 text-sm px-2 py-1 uppercase">
          features
        </span>
        <h2 className="text-3xl sm:5xl lg:6xl font-medium px-2 mt-10 tracking-wide">
          Easily build
          {""}
          <span className="ml-2 bg-gradient-to-r from-orange-500 to-orange-900 text-transparent bg-clip-text">
            your code
          </span>
        </h2>
      </div>

      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((items, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:1/3">
            <div className="flex">
              <div
                className="flex items-center justify-center mx-6 h-10 w-10 p-2 bg-neutral-500 text-orange-700 
            rounded-full"
              >
                {items.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{items.text}</h5>
                <p className="text-md p-2 mb-20 text-neutral-500">
                  {items.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedSection;
