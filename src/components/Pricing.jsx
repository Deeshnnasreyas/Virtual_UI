import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";
const Pricing = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center tracking-wider my-8">
        Pricing
      </h2>
      <div className="flex flex-wrap">
        {pricingOptions.map((prices, index) => (
          <div className="w-full sm:w-1/2 lg:w-1/3 p-2" key={index}>
            <div className="p-10 border border-neutral-700 rounded-xl">
              <p className="text-3xl mb-8">
                {prices.title}
                {prices.title === "Pro" && (
                  <span
                    className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent
                   bg-clip-text text-xl mb-4 ml-2"
                  >
                    (Most Popular)
                  </span>
                )}
              </p>
              <p className="mb-8">
                <span className="text-5xl mt-6 mr-2">{prices.price}</span>
                <span className="text-neutral-400 tracking-tight">/Month</span>
              </p>

              <ul>
                {prices.features.map((items, index) => (
                  <li className="flex pb-4" key={index}>
                    <CheckCircle2 />
                    <span className="ml-2">{items}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-flex items-center rounded-lg w-full h-12 p-5 tracking-tight text-xl text-center justify-center border border-orange-500 text-white hover:bg-gradient-to-r from-orange-400 to-orange-900
                transition duration-200"
              >
                Subscribe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
