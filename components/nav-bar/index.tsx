import React from "react";
import { ExternalLink } from "lucide-react";
import {
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const NavBar = () => {
  return (
    <div className="shadow-sm w-full sticky top-0  bg-white dark:bg-gray-900 z-[9999]">
      <div className="w-full flex items-center justify-center h-auto bg-black">
        <div className="max-w-6xl mx-auto py-2">
          <p className="text-white text-sm">
            <b>Subcribe to the channel 🙏</b>! Boost your resume with CVbuild.ai
            Resume Course out{" "}
            <a className="inline-flex items-center gap-1 font-bold text-primary">
              CVbuild.ai Course
              <ExternalLink size="14px" />
            </a>
          </p>
        </div>
      </div>
      <div className="w-full mx-auto max-w-7xl p-3 px-5 flex items-center justify-between ">
        <div className="flex items-center flex-1 gap-9">
          <div>
            <h5 className="font-black text-lg text-primary">CVbuild.ai</h5>
          </div>

          <div className="hidden lg:flex">
            <ul className="flex items-center gap-5 text-[14px] font-medium text-black dark:text-white">
              <li>
                <Link href="#">AI Features</Link>
              </li>
              <li>
                <Link href="#">Pricing</Link>
              </li>
              <li>
                <Link href="#">Resources</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <LoginLink>
            <Button variant="outline">Sign In</Button>
          </LoginLink>
          <RegisterLink>
            <Button>Get Started</Button>
          </RegisterLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
