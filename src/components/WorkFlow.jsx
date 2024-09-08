import { CheckCircle2 } from "lucide-react";
import code from "../assets/code.jpg";
import { checklistItems } from "../constants";
const WorkFlow = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Accelerate your {""}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          coding workflow
        </span>
      </h2>
      <div className="flex  flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2">
          <img src={code} alt="code" />
        </div>
        <div className="w-full pt-12 lg:w-1/2">
          {checklistItems.map((check, index) => (
            <div key={index} className="flex mb-12">
              <div className="w-10 h-10 p-2 items-center justify-center rounded-full text-green-400 bg-neutral-900">
                <CheckCircle2 />
              </div>
              <div className="px-2 flex flex-col">
                <h5 className="mt-1 mb-2 text-xl"> {check.title}</h5>
                <p className="text-neutral-500">{check.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;
