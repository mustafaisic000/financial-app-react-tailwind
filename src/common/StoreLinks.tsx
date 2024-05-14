import AppleLogo from "../assets/logos/app_store.svg";
import GooglePlay from "../assets/logos/google_play.svg";
import StoreLink from "../common/StoreLink";

function StoreLinks() {
  return (
    <div className="md:justiy-normal mt-10 hidden justify-center space-x-2 sm:flex ">
      <StoreLink
        href="https://www.apple.com/app-store"
        upperText="Download on the"
        lowerText="App Store"
        logo={AppleLogo}
        target="_blank"
        className="flex gap-3 rounded-lg bg-zinc-900 px-4 py-3 text-white hover:bg-zinc-950 active:bg-zinc-800"
      />
      <StoreLink
        href="https://play.google.com"
        upperText="Get it on"
        lowerText="Google Play"
        logo={GooglePlay}
        target="_blank"
        className="flex gap-3 rounded-lg bg-zinc-900 px-4 py-3 text-white hover:bg-zinc-950 active:bg-zinc-800"
      />
    </div>
  );
}

export default StoreLinks;
