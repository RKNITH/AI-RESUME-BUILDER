"use client";
import React, { Fragment } from "react";
import Link from "next/link";
import { ChevronDown, Loader, Moon, Sun } from "lucide-react";
import {
  LogoutLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const Header = () => {
  const { setTheme } = useTheme();
  const { user, isAuthenticated, isLoading, error } = useKindeBrowserClient();
  return (
    <div
      className="shadow-sm w-full sticky
    top-0 bg-white dark:bg-gray-900 z-[9]
        "
    >
      <div
        className="w-full mx-auto max-w-7xl
        py-2 px-5 flex items-center justify-between
        "
      >
        <div
          className="flex items-center
            flex-1 gap-9
            "
        >
          <div>
            <Link
              href="/dashboard"
              className="font-black text-[20px]
                      text-primary
                          "
            >
              CVbuild.ai
            </Link>
          </div>

          {isAuthenticated && user ? (
            <div className="flex items-center gap-2">
              <span
                className="font-normal
               text-black/50
               dark:text-primary-foreground"
              >
                Hi,
              </span>
              <h5
                className="font-bold text-black 
              dark:text-primary-foreground"
              >
                {user?.given_name} {user?.family_name}
              </h5>
            </div>
          ) : null}
        </div>

        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {isLoading || error ? (
            <Loader
              className="animate-spin !size-6 text-black
          dark:text-white
                      "
            />
          ) : (
            <Fragment>
              {isAuthenticated && user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger role="button">
                    <div className="flex items-center gap-1">
                      <Avatar role="button" className="!cursor-pointer">
                        <AvatarImage src={user?.picture || ""} />
                        <AvatarFallback className="!cursor-pointer">
                          {user?.given_name?.[0]}
                          {user?.family_name?.[0]}
                        </AvatarFallback>
                      </Avatar>
                      <ChevronDown size="17px" />
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="my-3">
                    <DropdownMenuItem
                      asChild
                      className="!text-red-500 !cursor-pointer font-medium"
                    >
                      <LogoutLink>Log out</LogoutLink>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : null}
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
