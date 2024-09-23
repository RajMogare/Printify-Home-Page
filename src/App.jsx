
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
function App() {
  return (
    <>
      <div className="relative">
        <Navbar />
        <Hero />
        <div className="relative group hidden md:block">
          <img
            className="w-12 border rounded-full shadow-md absolute bottom-0 left-5 cursor-pointer"
            alt=""
            src="https://static.ada.support/images/5a93af0b-c1ec-45fc-9cc8-0a3aa12ee4d0.svg"
          />
          {/* Tooltip */}
          <span className="absolute left-[90px] transform -translate-x-1/2 px-2 py-1 border text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Chat with Bot
          </span>
        </div>
      </div>
    </>
  );
}

export default App;
