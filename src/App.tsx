import Hero from "./component/Hero";

const App = () => {
  return (
    <div className=" ">
      <div className="fixed top-0 left-0 z-10 py-2 px-4 w-full flex items-center justify-between ">
        <p className="text-white text-sm font-heading">HU</p>
        <div className="text-white text-xs">{new Date().getTime()}</div>
      </div>
      <Hero />
      <div className="fixed bottom-0 left-0 z-10 py-2 px-4 ">
        <p className="text-white text-sm font-mono">Location</p>
      </div>
    </div>
  );
};

export default App;
