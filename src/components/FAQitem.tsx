import { useState } from "react";

const FAQitem = ({ question, answer, isLastItem }: { question: string, answer: string, isLastItem:boolean }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`py-4 ${
            !isLastItem ? "border-b border-gray-200" : ""
          }`}>
            <button
                className="w-full text-left flex justify-between items-center"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-lg font-medium text-gray-900">{question}</span>
                <svg
                    className={`w-6 h-6 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''} text-gray-900`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            {isOpen && (
                <div className="mt-2 text-gray-700">
                    {answer}
                </div>
            )}
        </div>
    ); 
}

export default FAQitem