import SocialMediaIcons from "../SocialMediaIcons/SocialMediaIcons";

export default function ComingSoonJumbotron() {
  return (
    <div className="font-alex bg-zinc-900 h-screen flex flex-col gap-3 items-center justify-between p-10">
      <div className="bg-vpg-malta bg-contain bg-no-repeat bg-center w-28 aspect-square animate-fade-down"></div>
      <div className="animate-fade flex flex-col justify-center gap-20">
        <p className="text-slate-100 text-9xl font-black tracking-wide">
          Coming Soon
        </p>
        <p className="text-slate-400 text-2xl font-extralight tracking-wide">
          We are working hard on our new site. Follow the news updates and
          you'll be the first to know when it's ready
        </p>
        <div>
          <button className="bg-red-700 duration-200 px-6 py-3 font-semibold shadow-sm rounded-lg text-lg text-stone-900 ">
            Notify Me
          </button>
        </div>
      </div>
      <SocialMediaIcons />
    </div>
  );
}
