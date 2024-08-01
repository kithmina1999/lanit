"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/NavBarMenu";
import { cn } from "@/utils/cn";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 mt-3", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Lessons">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Grade 1"
              href="/lessons"
              description="Lessons and videos for first graders"
            />
            <ProductItem
              title="Grade 2"
              href="/lessons"
              description="Lessons and videos for first graders"
            />
            <ProductItem
              title="Grade 3"
              href="/lessons"
              description="Lessons and videos for first graders"
            />
            <ProductItem
              title="Grade 4"
              href="/lessons"
              description="Lessons and videos for first graders"
            />
            <ProductItem
              title="Grade 5"
              href="/lessons"
              description="Lessons and videos for first graders"
            />
            <ProductItem
              title="Grade 6"
              href="/lessons"
              description="Lessons and videos for first graders"
            />
            <ProductItem
              title="Grade 7"
              href="/lessons"
              description="Lessons and videos for first graders"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
