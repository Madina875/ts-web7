import { memo } from "react";

const Home = () => {
  return (
    <div>
      <div className="relative min-h-screen bg-black overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[60px] bg-gradient-to-b from-blue-800/70 to-transparent blur-2xl"></div>

        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-[2px] h-[2px] bg-white rounded-full animate-ping"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${1 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(Home);
