"use client"

interface QuestionOptionProps {
  id: string
  label: string
  selected?: boolean
  onChange?: (id: string) => void
}

export function QuestionOption({ id, label, selected = false, onChange }: QuestionOptionProps) {
  return (
    <label
      className={`flex items-center p-4 rounded-xl cursor-pointer transition-colors ${
        selected ? "border-2 border-[#3b3345] bg-white" : "border border-[#e0e0e0] hover:bg-gray-50"
      }`}
    >
      <input type="checkbox" className="sr-only" checked={selected} onChange={() => onChange?.(id)} />
      <div
        className={`w-5 h-5 rounded-full mr-4 flex-shrink-0 flex items-center justify-center ${
          selected ? "bg-[#3b3345]" : "border-2 border-[#e0e0e0]"
        }`}
      >
        {selected && (
          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>
      <span className={`text-base ${selected ? "text-[#3b3345] font-medium" : "text-[#3b3345]"}`}>{label}</span>
    </label>
  )
}
