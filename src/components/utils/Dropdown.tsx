import { useState, useRef, useEffect } from "react"

export default function Dropdown({ options, onChooseOption, menuName = "Options" }: { 
    options: Array<string>;
    onChooseOption: (option: string) => void;
    menuName?: string;
 }) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown if user clicks outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none"
      >
        {menuName}
        <svg
          className="ml-2 -mr-1 h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M5.25 7.5l4.5 4.5 4.5-4.5" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 z-20 w-48 origin-top-right rounded-md shadow-lg">
          <div>
            {options.map((option: string) => { return (
                <button
                    onClick={() => onChooseOption(option)}
                    // className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-white-700"
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:text-white"
                    key={option}
                >
                    {option}
                </button>
            )})}
          </div>
        </div>
      )}
    </div>
  )
}
