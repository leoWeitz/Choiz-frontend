"use client"

import { QuestionOption } from "@/components/QuestionOption"
import { QuestionnaireWrapper } from "../layout"
import { useState } from "react"
import { useSelectionContext } from "../layout"

export default function Question1() {

  const questionConfig = {
    step: 1,
  }

  return (
    <QuestionnaireWrapper config={questionConfig}>
      <Question1Content />
    </QuestionnaireWrapper>
  )
}

function Question1Content() {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])
  const [otherText, setOtherText] = useState("")
  const { setIsOptionSelected } = useSelectionContext();

  const handleOptionChange = (optionId: string) => {
    setSelectedOptions((prev) => {
      setIsOptionSelected(true);
      if (optionId === "none") {
        return ["none"]
      }
      const newSelection = prev.includes(optionId)
        ? prev.filter((id) => id !== optionId)
        : [...prev.filter((id) => id !== "none"), optionId]

      return newSelection.length === 0 ? ["none"] : newSelection
    })
  }

  const options = [
    { id: "pain", label: "Dolor repentino y/o enrojecimiento" },
    { id: "dandruff", label: "Caspa" },
    { id: "psoriasis", label: "Psoriasis" },
    { id: "sunburn", label: "Quemadura de sol" },
    { id: "other", label: "Otro" },
    { id: "none", label: "No, ninguno de los anteriores" },
  ]
  
  return (
    <>
      <div className="mb-8">
          <h2 className="text-2xl font-semibold text-[#3b3345] mb-4 leading-tight">
            ¿Tienes algún problema en el cuero cabelludo?
          </h2>
          <p className="text-[#666768] text-base">Selecciona todas las opciones que apliquen.</p>
        </div>

        <div className="space-y-3 mb-8">
          {options.map((option) => (
            <QuestionOption
              key={option.id}
              id={option.id}
              label={option.label}
              selected={selectedOptions.includes(option.id)}
              onChange={handleOptionChange}
            />
          ))}

          {selectedOptions.includes("other") && (
            <div className="mt-4">
              <textarea
                value={otherText}
                onChange={(e) => setOtherText(e.target.value)}
                placeholder="Por favor, especifica..."
                className="w-full p-4 border border-[#e0e0e0] rounded-2xl text-[#3b3345] placeholder-[#666768] resize-none focus:outline-none focus:ring-2 focus:ring-[#6042aa] focus:border-transparent"
                rows={3}
              />
            </div>
          )}
        </div>
      </>
  )
}
