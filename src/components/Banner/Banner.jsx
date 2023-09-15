import Marquee from "react-fast-marquee";

export default function Banner() {
  return (
    <Marquee
      className="!absolute top-0 left-0 bg-red-700 animate-move-down z-10 w-screen h-8"
      autoFill="true"
    >
      <span className="mx-5 block w-5 bg-contain bg-no-repeat bg-center aspect-square bg-football"></span>
      <span className="mx-5 uppercase text-zinc-900">Coming Soon</span>
    </Marquee>
  );
}
