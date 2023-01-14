import { Navbar } from "./Navbar";

export const HomeLanding = () => {
  return (
    <>
      <div className="bg-[url('/bg.png')] h-screen bg-cover">
        <div className="flex">
          <div className="m-auto mt-[15%] flex flex-col text-center">
            <div className="tracking-[0.2em] text-[38px]">REUBEN</div>
            <div className="text-[18px] italic font-light mt-3 mb-2">{`&`}</div>
            <div className="tracking-[0.2em] text-[38px] mb-3 ">GRACE</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeLanding;
