export default function SocialMediaIcon({ iconClass, iconLink }) {
  return (
    <li>
      <a href={iconLink} target="_blank" rel="noreferrer">
        <i
          className={`${iconClass} block w-7 bg-contain bg-no-repeat bg-center aspect-square fill-slate-800 cursor-pointer`}
        ></i>
      </a>
    </li>
  );
}
