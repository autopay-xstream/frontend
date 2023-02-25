import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

export default function DropSelect({
  options,
  placeholder,
  selected,
  setSelected,
}) {
  return (
    <div className="w-full">
      <Listbox
        value={selected}
        onChange={(value) => {
          setSelected(value);
        }}
      >
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full flex items-center cursor-pointer rounded-lg mt-8 px-4 py-6 border-[1px] mr-0 border-gray-300  bg-white focus:outline-none text-left">
            <span className="mr-3">{selected ? selected.icon : ""}</span>

            <span className="block truncate text-gray-400 capitalize">
              {selected?.name ? selected.name : placeholder}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-50">
              {options.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-pointer select-none py-4  px-4 ${
                      active ? "bg-[#96D068] text-white" : "text-gray-900"
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <div className="flex items-center justify-start">
                      <span className="mr-3">{person.icon}</span>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal "
                        } capitalize`}
                      >
                        {person.name}
                      </span>
                      {/* {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null} */}
                    </div>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
