import { motion } from "framer-motion";

function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center gap-2">
        <div className="relative w-20 h-20">
          <motion.span
            className="absolute w-20 h-20 border-4 border-light-gray border-t-4 border-[#a1eafb] rounded-full"
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 1,
              ease: "linear",
            }}
          />
        </div>
        <p className="text-lg">Loading...</p>
      </div>
    </div>
  );
}

export default Loading;
