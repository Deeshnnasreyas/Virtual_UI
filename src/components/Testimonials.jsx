import { testimonials } from "../constants/index.jsx";
const Testimonials = () => {
  return (
    <div className="mt-12">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center tracking-wider my-10 lg:my-20">
        What People are saying
      </h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testmoni, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
            <div
              className="border-neutral-400 bg-neutral-800 font-thin text-md rounded-lg 
              text-center p-4 "
            >
              <p>{testmoni.text}</p>
              <div className="mt-5 flex items-start">
                <img
                  src={testmoni.image}
                  alt="user"
                  className="rounded-full w-12 h-12 mr-2 border-neutral-300"
                />
                <div className="flex flex-col  items-start justify-start pl-4">
                  <span className="font-normal">{testmoni.user}</span>
                  <p className="text-neutral-400 text-sm">{testmoni.company}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="w-full sm:w-1/2 lg:w-1/3">
        <ul>
          {testimonials.map((testmoni, index) => (
            <li
              key={index}
              className="border-neutral-400 bg-neutral-600 text-white text-center p-4 "
            >
              <p>{testmoni.text}</p>
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default Testimonials;
