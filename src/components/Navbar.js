import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import mainLogo from "../assets/jp.png";
const navigation = [
  { name: "Jihun Park", href: "/" },
  { name: "Experiences", href: "/experiences" },
  { name: "Portfolio", href: "/portfolio" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navigation(props) {
  return (
    <Disclosure as="nav" className=" top-0 left-0 right-0 bg-white z-10">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl">
            <div className="relative flex h-14 items-center justify-between">
              <div className="flex flex-1 items-center lg:justify-start justify-center sm:items-stretch space-between">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      className={({ isActive }) => {
                        return (
                          " no-underline block rounded-md " +
                          (isActive
                            ? " text-black font-semibold text-lg"
                            : "text-gray-300  hover:text-gray-200 font-semibold text-lg")
                        );
                      }}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {props.children}
        </>
      )}
    </Disclosure>
  );
}
