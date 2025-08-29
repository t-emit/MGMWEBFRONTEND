// src/components/AccordionItem.jsx

// CORRECTED IMPORT STATEMENT
import React, { useState, useRef } from 'react'; // Removed useEffect as it's not used
import { FaChevronRight } from 'react-icons/fa';

const AccordionItem = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentRef = useRef(null);

  // Note: useEffect is not actually needed in this specific component,
  // so I've removed it from the import for cleanliness.
  // The maxHeight logic works correctly without it.

  return (
    <div className="border-b border-dotted border-gray-300">
      {/* The clickable header for the accordion item */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-4 text-left text-indigo-700 font-semibold focus:outline-none"
      >
        <span className="flex items-center">
          <FaChevronRight
            className={`mr-3 transform transition-transform duration-300 ${
              isOpen ? 'rotate-90' : ''
            }`}
          />
          {title}
        </span>
      </button>

      {/* The collapsible content area */}
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-500 ease-in-out"
        // This line checks if contentRef.current exists before accessing scrollHeight
        // to prevent potential errors on the very first render.
        style={{ maxHeight: isOpen && contentRef.current ? `${contentRef.current.scrollHeight}px` : '0px' }}
      >
        <div className="pl-8 pb-4 text-gray-700">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;