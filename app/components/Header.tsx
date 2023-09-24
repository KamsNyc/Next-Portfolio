import Link from "next/link";
import React from "react";
import Avatar from "@mui/material/Avatar";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  return (
    <main className="flex justify-center text-sm font-thin w-full">
      <section className="flex px-4 justify-between border-[1px] border-[#111111] rounded-lg text-white w-[300px] sm:w-[50%] h-[45px] ease-in-out duration-300  ">
        {/* AVATAR */}
        <div className="items-center flex">
          <Avatar
            className="border-2 border-[#111111]"
            alt="Kamel Singh"
            src="/avatar.png"
            sx={{ width: 35, height: 35 }}
          />
        </div>

        {/* MENU LINKS */}
        <section className="hidden md:flex">
          <div className="flex items-center">
            <ul className="flex gap-8 pr-8">
              <Link href={"/"}>Home</Link>
              <Link href={"/about"}>About</Link>
              <Link href={"/project"}>Projects</Link>
            </ul>
          </div>
          {/* 
          AVALIBLE ICON */}

          <div className="flex items-center">
            <div className="border-[1px] border-[#111111] py-[4px] px-[8px] rounded-md hover:bg-[#111111] flex items-center gap-2">
              <Image
                src="/avalibleIcon.png"
                width={8}
                height={8}
                alt="Avalible Icon"
              />

              {/* CONTACT BUTTON */}

              <Link className="" href={"/contact"}>
                Contact
              </Link>
            </div>
          </div>
        </section>

        {/* MENU ICON */}
        <div className="flex items-center md:hidden">
          <MenuIcon className="w-[35px] h-[35px]" />
        </div>
      </section>
    </main>
  );
}

export default Header;
