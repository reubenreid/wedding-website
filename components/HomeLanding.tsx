import { Navbar } from "./Navbar";

export const HomeLanding = () => {
  return (
    <>
      <div className="bg-[url('/bg.png')] h-screen bg-cover">
        <div className="relative h-32 w-32">
          <div className="absolute left-0 top-0 h-16 w-16">
            <Navbar />
          </div>
        </div>

        <div className="flex">
          <div className="m-auto mt-20 flex flex-col text-center">
            <div className="tracking-[0.2em] text-[42px]">REUBEN</div>
            <div className="text-[20px] italic font-light mt-3 mb-3">{`&`}</div>
            <div className="tracking-[0.2em] text-[42px] mb-3 ">GRACE</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeLanding;
