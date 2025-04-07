import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { X } from "lucide-react";

export default function SideDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button onClick={() => setIsOpen(true)}>Open Drawer</button>
      
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-red-700 shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-lg font-semibold">Drawer</h2>
          <button onClick={() => setIsOpen(false)}>
            {/* <X className="w-6 h-6" /> */}
            <h1>fgdfguygyeuye</h1>
          </button>
        </div>
        <div className="p-4">
          <p>Drawer content goes here...</p>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
}
