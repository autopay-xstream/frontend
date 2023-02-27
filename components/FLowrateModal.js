import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import DropSelect from "./DropSelect";

const options = [
  {
    id: 1,
    name: "/month",
  },
  {
    id: 2,
    name: "/sec",
  },
];
export default function FlowRateModal({
  isOpen,
  setIsOpen,
  selectedType,
  setAmount,
}) {
  const [selectedDuration, setSelectedDuration] = useState(options[0]);
  const [_amount, _setAmount] = useState(0);
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  {selectedType.name}
                </Dialog.Title>
                <div className=" flex items-center">
                  <input
                    className="rounded-lg w-full mt-10 px-4 py-6 border-[1px] mr-0 border-gray-300 text-gray-800 bg-white focus:outline-none"
                    placeholder={selectedType.name}
                    value={_amount}
                    onChange={(e) => _setAmount(e.target.value)}
                  />
                  {selectedType.id === 2 && (
                    <div className="mt-2 w-[50%] ml-2">
                      <DropSelect
                        selected={selectedDuration}
                        setSelected={setSelectedDuration}
                        options={options}
                        placeholder={"Select a token"}
                      />
                    </div>
                  )}
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setAmount(_amount);
                      setIsOpen(false);
                    }}
                    className="w-full flex items-center justify-center bg-[#96D068] rounded-[10px] px-[80px] py-[20px] mx-auto mt-10 text-white"
                  >
                    Confirm
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
