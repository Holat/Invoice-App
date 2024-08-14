import Header from "../Home/Header";
import leftArrow from "../../assets/icon-arrow-left.svg";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import AddNewItem from "../Home/AddNewItem";
import { createContext, useContext, useRef, useState } from "react";
import { AppContext } from "../../App";
import BillFrom from "../New/BillFrom";
import BillTo from "../New/BillTo";
import ItemList from "../New/ItemList";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { BsExclamationTriangleFill } from "react-icons/bs";
import { useForm } from "react-hook-form";

export const CreateInvoiceContext = createContext();

export default function CreateInvoice() {
  //react-hook form params.
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  //bill-From params.
  const [billFromAddress, setBillFromAddress] = useState("");
  const [billFromCity, setBillFromCity] = useState("");
  const [billFromPostCode, setBillFromPostCode] = useState("");
  const [billFromCountry, setBillFromCountry] = useState("");

  //bill-To params.
  const [billToName, setBillToName] = useState("");
  const [billToEmail, setBillToEmail] = useState("");
  const [billToAddress, setBillToAddress] = useState("");
  const [billToCity, setBillToCity] = useState("");
  const [billToPostCode, setBillToPostCode] = useState("");
  const [billToCountry, setBillToCountry] = useState("");
  const [billToInvoiceDate, setBillToInvoiceDate] = useState("");
  const [billToPaymentTerms, setBillToPaymentTerms] = useState("Net 30 Days");
  const [billToProjectDesc, setBillToProjectDesc] = useState("");

  const history = useHistory();

  const [items, setItems] = useState([]);

  //control modal.
  const [open, setOpen] = useState(false);

  //function to create a new form array when clicked.
  function handleAddNewItemClick() {
    setItems([...items, { itemName: "", Qty: "", Price: "" }]);
  }

  //function to handle input change in the form array.
  function handleInputChange(index, event) {
    const { name, value } = event.target;
    const newItems = [...items]; //creates a shallow copy the array and assigns it to newItems.
    newItems[index][name] = value; //this allows us change the value of a particular field using the index and the name.

    setItems(newItems);
  }

  //function to erase/delete an array form.
  function handleDelete(index) {
    const newItems = [...items]; //store the forms array in a new variable.
    newItems.splice(index, 1); //delete an array at a specific index.

    setItems(newItems);
  }

  function onSubmit() {
    console.log("submitted");
  }

  return (
    <CreateInvoiceContext.Provider
      value={{
        items,
        handleAddNewItemClick,
        handleInputChange,
        handleDelete,
        billFromAddress,
        setBillFromAddress,
        billFromCity,
        setBillFromCity,
        billFromPostCode,
        setBillFromPostCode,
        billFromCountry,
        setBillFromCountry,
        billToName,
        setBillToName,
        billToEmail,
        setBillToEmail,
        billToAddress,
        setBillToAddress,
        billToCity,
        setBillToCity,
        billToPostCode,
        setBillToPostCode,
        billToCountry,
        setBillToCountry,
        billToInvoiceDate,
        setBillToInvoiceDate,
        billToPaymentTerms,
        setBillToPaymentTerms,
        billToProjectDesc,
        setBillToProjectDesc,
        register,
        errors,
      }}
    >
      <div>
        <div className="mb-10">
          <div>
            <Header />
          </div>
          <div className="px-3 pt-5">
            <div
              onClick={() => history.go(-1)}
              className="flex flex-row font-open-sans items-center gap-3 pt-2"
            >
              <div>
                <img src={leftArrow} alt="" className="h-4 cursor-pointer" />
              </div>
              <div className="font-bold tracking-wide">Go back</div>
            </div>

            <div className="pt-10">
              <div className="flex flex-col gap-5">
                <div className="font-bold font-open-sans text-2xl mb-2">
                  New Invoice
                </div>
                <div className="text-[#7C5DFA] font-bold text-[18px] mb-5">
                  Bill From
                </div>
              </div>

              {/* Form. */}
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-5"
              >
                <span>
                  <BillFrom />
                </span>
                <span>
                  <BillTo />
                </span>

                {/* item list. */}
                <div>
                  <div className="text-[#2f206b] font-bold text-[18px] mb-4 mt-6">
                    Item List
                  </div>
                  <div>
                    <ItemList />
                  </div>
                </div>

                {/* Add New Btn. */}
                <AddNewItem />

                {/* Other Btns. */}
                <div className="flex flex-row justify-between pt-8 border-t-2">
                  <div
                    onClick={() => setOpen(true)}
                    className="border border-transparent text-[#564791] bg-[#776e9c] rounded-full p-2 bg-opacity-30 font-bold px-3 cursor-pointer"
                  >
                    Discard
                  </div>
                  <div className="border border-transparent text-[#78738d] bg-[#2f206b] rounded-full p-2 font-bold px-3 cursor-pointer">
                    Save as Draft
                  </div>
                  <button
                    type="submit"
                    className="border border-transparent text-white bg-[#3b1cb6] rounded-full p-2 font-semibold px-3 cursor-pointer"
                  >
                    Save & Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* //Tailwind custom Modal. */}
        <div>
          <Dialog open={open} onClose={setOpen} className="relative z-10">
            <DialogBackdrop
              transition
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
            />
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <DialogPanel
                  transition
                  className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                >
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                        <BsExclamationTriangleFill
                          aria-hidden="true"
                          className="h-6 w-6 text-red-600"
                        />
                      </div>
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <DialogTitle
                          as="h3"
                          className="text-base font-semibold leading-6 text-gray-900"
                        >
                          Discard Invoice
                        </DialogTitle>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            Are you sure you want to discard this invoice?{" "}
                            <br /> This action cannot be undone.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      onClick={() => history.push("/")}
                      className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    >
                      Continue
                    </button>
                    <button
                      type="button"
                      data-autofocus
                      onClick={() => setOpen(false)}
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    >
                      Cancel
                    </button>
                  </div>
                </DialogPanel>
              </div>
            </div>
          </Dialog>
        </div>
      </div>
    </CreateInvoiceContext.Provider>
  );
}
