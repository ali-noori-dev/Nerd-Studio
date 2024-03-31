import Image from "next/image";
import { NavItem } from "../../lib/definitions";
import TranslateIcon from "../assets/icons/translateIcon";
import WriteIcon from "../assets/icons/writeIcon";
import NavLink from "./navLink";

export default function SideNav() {
  const itemsList: NavItem[] = [
    {
      title: "Write",
      icon: <WriteIcon />,
      href: "/write",
    },
    {
      title: "Translate",
      icon: <TranslateIcon />,
      href: "/translate",
    },
  ];

  return (
    <aside className="flex flex-col w-[258px] p-[26px_20px_8px] gap-5">
      <header className="w-full pl-3 pr-1 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Nerd Studio</h1>
        <Image
          src="/profile-pic.png"
          width={24}
          height={24}
          alt="User Profile"
        />
      </header>

      <div className="flex flex-col flex-1 gap-[6px] py-3">
        {itemsList.map((item, index) => (
          <NavLink key={index} item={item} />
        ))}
      </div>
    </aside>
  );
}
