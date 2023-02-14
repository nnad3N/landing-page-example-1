import { Menu } from "@headlessui/react";
import { ArrowTopRightOnSquareIcon, ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import { forwardRef } from "react";
import Logo from "./Logo";

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

const Nav = () => {
  return (
    <header className="mx-auto flex h-16 w-full items-center justify-between px-5 lg:max-w-6xl">
      <Logo />
      <div className="hidden space-x-8 md:flex">
        {links.map(({ name, href }, index) => (
          <NavLink key={index} name={name} href={href} className="duration-100 hover:text-accent" />
        ))}
      </div>
      <Menu as="div" className="relative md:hidden">
        <Menu.Button className="flex items-center space-x-4 rounded-xl border-2 border-accent px-3 py-2 pr-1 text-sm focus-visible:outline-dashed focus-visible:outline-2 focus-visible:-outline-offset-1">
          {({ open }) => (
            <>
              <span>Menu</span>
              {open ? <ChevronUpIcon className="h-5 w-5" /> : <ChevronDownIcon className="h-5 w-5" />}
            </>
          )}
        </Menu.Button>
        <Menu.Items className="absolute right-0 mt-2 flex w-44 origin-top-right flex-col divide-y divide-gray-100 overflow-auto rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {links.map(({ name, href }, index) => (
            <Menu.Item key={index}>
              {({ active }) => (
                <NavLink
                  className={`${active ? "bg-gray-100" : ""} py-2 px-3 duration-75`}
                  name={name}
                  href={href}
                ></NavLink>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Menu>
    </header>
  );
};

export default Nav;

interface NavLinkProps {
  className?: string;
  name: string;
  href: string;
}

const NavLink: React.FC<NavLinkProps> = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ className, name, href, ...rest }, ref) => {
    const isExternal = href.startsWith("http");

    return (
      <a
        ref={ref}
        {...rest}
        className={`text-sm capitalize transition-colors lg:text-base ${
          isExternal && "flex items-center"
        } ${className}`}
        href={href}
        target={isExternal ? "_blank" : "_self"}
      >
        <span>{name}</span>
        {isExternal && <ArrowTopRightOnSquareIcon className="ml-1 h-4 w-4" />}
      </a>
    );
  }
);
