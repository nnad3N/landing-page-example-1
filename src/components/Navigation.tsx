import { Dialog, Menu, Popover, Transition } from "@headlessui/react";
import { ArrowTopRightOnSquareIcon, ChevronDownIcon, ChevronUpIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { forwardRef, Fragment, useState } from "react";

const links = [
  {
    name: "o mnie",
    href: "#about",
  },
  {
    name: "terapia",
    href: "#therapy",
  },
  {
    name: "kontakt",
    href: "#contact",
  },
  {
    name: "fanpage",
    href: "https://facebook.com",
  },
];

const Navigation = () => {
  return (
    <>
      <nav className="hidden space-x-8 md:flex">
        {links.map(({ name, href }, index) => (
          <NavLink key={index} name={name} href={href} />
        ))}
      </nav>
      <Popover as="div" className="relative z-20 md:hidden">
        {({ open }) => (
          <>
            <Popover.Button className="flex items-center space-x-4 rounded-full border-2 border-accent px-3 py-2 pr-2 text-sm focus-visible:outline-dashed focus-visible:outline-2 focus-visible:-outline-offset-1">
              <span>Menu</span>
              {open ? <ChevronUpIcon className="h-4 w-4" /> : <ChevronDownIcon className="h-4 w-4" />}
            </Popover.Button>
            <Transition>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Popover.Overlay className="fixed inset-0 bg-zinc-800/40 backdrop-blur-sm" />
              </Transition.Child>
              <div className="fixed inset-0">
                <div className="flex min-h-full items-start justify-center p-5">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Popover.Panel className="w-full max-w-xs transform flex-col rounded-md bg-white py-4 px-5 text-left align-middle shadow-xl ring-1 ring-black ring-opacity-5 transition-all focus:outline-none">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-medium">Nawigacja</h3>
                        <Popover.Button className="translate-x-1 rounded-full p-1 transition-colors duration-100 hover:bg-gray-100">
                          <XMarkIcon className="h-5 w-5" />
                        </Popover.Button>
                      </div>
                      <nav className="mt-3 flex flex-col divide-y divide-gray-100">
                        {links.map(({ name, href }, index) => (
                          <NavLink key={index} className="py-2 first:pt-0 last:pb-0" name={name} href={href} />
                        ))}
                      </nav>
                    </Popover.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Transition>
          </>
        )}
      </Popover>
    </>
  );
};

export default Navigation;

interface NavLinkProps {
  name: string;
  href: string;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ name, href, className }) => {
  const isExternal = href.startsWith("http");

  return (
    <a
      className={`capitalize transition-colors duration-100 hover:text-accent ${
        isExternal ? "flex items-center" : ""
      } ${className}`}
      href={href}
      target={isExternal ? "_blank" : "_self"}
    >
      <span>{name}</span>
      {isExternal && <ArrowTopRightOnSquareIcon className="ml-1 h-4 w-4" />}
    </a>
  );
};
