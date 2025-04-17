import { FC } from "react";
import { CameraIcon } from "lucide-react";

const ServiceHighlight: FC = () => {
  return (
    <section className="bg-white shadow-lg rounded-2xl p-6 sm:p-10 text-center max-w-3xl mx-auto mt-10">
      <div className="flex justify-center items-center gap-2 text-pink-600 text-3xl mb-4">
        <CameraIcon className="w-8 h-8" />
        {/* <span></span> */}
        {/* <SparklesIcon className="w-8 h-8" /> */}
      </div>
      <h2 className="text-2xl font-bold text-gray-800">
        Complete Photography & Videography Services
      </h2>
      <p className="text-gray-600 mt-3">
        We specialize in A to Z photography and videography services bringing your vision to life with professional quality and creativity.
      </p>
    </section>
  );
};

export default ServiceHighlight;
