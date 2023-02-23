import { useRouter } from "next/router";

export const Navbar = () => {
  return (
    <div className="absolute left-0 top-0 h-[5vh]">
      <div className="flex justify-center w-screen space-x-10 lg:space-x-20 mt-5">
        <NavItem title={"HOME"} route={"/"} />
        <NavItem title={"RSVP"} route={"/rsvp"} />
        <NavItem title={"DETAILS"} route={"/details"} />
        <NavItem title={"CONTACT"} route={"/contact"} />
      </div>
    </div>
  );
};

const NavItem = ({ title, route }: { title: string; route: string }) => {
  const router = useRouter();

  return (
    <a
      className="tracking-[0.08em] relative group"
      onClick={() => router.push(route)}
    >
      <span className="font-light text-[12px] lg:text-[14px]">{title}</span>
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-600 group-hover:w-full group-hover:transition-all"></span>
    </a>
  );
};
