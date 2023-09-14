import SocialMediaIcon from "./SocialMediaIcon";

export default function SocialMediaIcons() {
  return (
    <ul className="flex gap-4 mb-6 animate-fade-up">
      <SocialMediaIcon iconClass="bg-facebook" iconLink="https://www.facebook.com/VPGMalta" />
      <SocialMediaIcon iconClass="bg-instagram" iconLink="https://www.instagram.com/vpg_malta/" />
      <SocialMediaIcon iconClass="bg-twitter" iconLink="https://twitter.com/malta_pro" />
    </ul>
  );
}
