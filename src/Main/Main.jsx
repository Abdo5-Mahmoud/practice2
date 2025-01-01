import Button from "../ui/Button";
import shoes from "../imges/shoes.png";
const Main = () => {
  return (
    <main className="mt-20 flex items-center justify-center gap-1 rounded-3xl bg-rose-50 p-4 shadow-lg max-md:flex-col">
      <div className="flex-1">
        <h1 className="mb-5 text-[80px] text-start font-extrabold capitalize leading-[70px]">
          Your Feet Deserve The Best
        </h1>
        <p className="text-start">
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="space-x-2">
          <Button type={"red"}>Shop Now</Button>
          <Button type="secondary">Category</Button>
        </div>
      </div>
      <div className="flex-1">
        <img src={shoes} className="max-w-full" alt="" />
      </div>
    </main>
  );
};

export default Main;
