import Button from "../ui/Button";
import shoes from "../imges/shoes.png";
import "./main.scss";
const Main = () => {
  return (
    <main className="width-full flex min-h-[90vh] min-w-full items-center justify-center gap-10 rounded-3xl bg-rose-50 p-4 pt-10 shadow-lg max-md:h-[130vh] max-md:flex-col">
      <div className="flex-1">
        <h1 className="mb-5 text-start text-[80px] font-extrabold capitalize leading-[70px]">
          Your Feet Deserve The Best
        </h1>
        <p className="text-start max-md:text-center">
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="space-x-2">
          <Button type={"red"}>Shop Now</Button>
          <Button type="secondary">Category</Button>
        </div>
      </div>
      <div className="stage-cube relative overflow-hidden">
        <div className="cubeContainer md:mt-52">
          <div className="face1">
            <img src={shoes} className="max-w-full" alt="" />
          </div>
          <div className="face2">
            <img src={shoes} className="max-w-full" alt="" />
          </div>
          <div className="face3">
            <img src={shoes} className="max-w-full" alt="" />
          </div>
          <div className="face4">
            <img src={shoes} className="max-w-full" alt="" />
          </div>
          <div className="face5">
            <img src={shoes} className="max-w-full" alt="" />
          </div>
          <div className="face6">
            <img src={shoes} className="max-w-full" alt="" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
