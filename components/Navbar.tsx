import { useRouter } from "next/router";

export const Navbar = () => {
  return (
    <div className="flex space-x-20 ml-10 mt-5">
      <NavItem title={"HOME"} route={"/"} />
      <NavItem title={"RSVP"} route={"/rsvp"} />
      <NavItem title={"DETAILS"} route={"/details"} />
      <NavItem title={"CONTACT"} route={"/contact"} />
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
      <span className="font-light">{title}</span>
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-600 group-hover:w-full group-hover:transition-all"></span>
    </a>
  );
};
