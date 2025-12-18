import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <div className="fixed min-h-screen inset-0 z-50 flex flex-col items-center justify-center bg-white">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        className="w-14 h-14 border-4 border-orange-500 border-t-transparent rounded-full"
      />
      <p className="mt-4 text-gray-600 text-lg font-medium">
        Loading LocalChefBazaar...
      </p>
    </div>
  );
};

export default LoadingScreen;
