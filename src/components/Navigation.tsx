import { Dialog, Transition } from "@headlessui/react";
import { ArrowTopRightOnSquareIcon, ChevronDownIcon, ChevronUpIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { Fragment, useState } from "react";

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
    name: "facebook",
    href: "https://www.facebook.com/profile.php?id=100090957246118",
  },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="hidden space-x-8 md:flex">
        {links.map(({ name, href }, index) => (
          <NavLink key={index} name={name} href={href} />
        ))}
      </nav>
      <button
        aria-label="Otwórz menu nawigacji"
        onClick={() => setIsOpen(true)}
        className="flex items-center space-x-4 rounded-full border-2 border-accent px-3 py-2 pr-2 text-sm focus-visible:outline-dashed focus-visible:outline-2 focus-visible:-outline-offset-1 md:hidden"
      >
        <span>Menu</span>
        {isOpen ? <ChevronUpIcon className="h-4 w-4" /> : <ChevronDownIcon className="h-4 w-4" />}
      </button>
      <Transition show={isOpen} as={Fragment}>
        <Dialog unmount={false} as="div" className="relative z-20 md:hidden" onClose={() => setIsOpen(false)}>
          <>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-zinc-800/40 backdrop-blur-sm" />
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
                  <Dialog.Panel className="w-full max-w-xs transform flex-col rounded-md bg-white py-4 px-5 text-left align-middle shadow-xl ring-1 ring-black ring-opacity-5 transition-all focus:outline-none">
                    <div className="flex items-center justify-between">
                      <Dialog.Title as="h3" className="text-sm font-medium">
                        Nawigacja
                      </Dialog.Title>
                      <button
                        aria-label="Zamknij menu nawigacji"
                        onClick={() => setIsOpen(false)}
                        className="translate-x-1 rounded-full p-1 transition-colors duration-100 hover:bg-gray-100"
                      >
                        <XMarkIcon className="h-5 w-5" />
                      </button>
                    </div>
                    <nav className="mt-3 flex flex-col divide-y divide-gray-100">
                      {links.map(({ name, href }, index) => (
                        <NavLink
                          key={index}
                          onClick={() => setIsOpen(false)}
                          className="py-2 first:pt-0 last:pb-0"
                          name={name}
                          href={href}
                        />
                      ))}
                    </nav>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </>
        </Dialog>
      </Transition>
    </>
  );
};

export default Navigation;

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  name: string;
  href: string;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ name, href, className, onClick, ...rest }) => {
  const isExternal = href.startsWith("http");

  return (
    <a
      onClick={onClick}
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
