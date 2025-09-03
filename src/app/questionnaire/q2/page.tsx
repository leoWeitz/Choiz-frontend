"use client"

import { QuestionOption } from "@/components/QuestionOption"
import { QuestionnaireWrapper } from "../layout"
import { useState } from "react"

export default function Question2() {
  const [selectedOptions, setSelectedOptions] = useState<string[]>(["none"])
  const [otherText, setOtherText] = useState("")

  const handleOptionChange = (optionId: string) => {
    setSelectedOptions((prev) => {
      if (optionId === "none") {
        return ["none"]
      }

      const newSelection = [optionId]

      return newSelection.length === 0 ? ["none"] : newSelection
    })
  }

  const options = [
    { id: "no", label: "No" },
    { id: "yes", label: "Sí" },
    { id: "idk", label: "No estoy seguro" },
  ]

  const questionConfig = {
    step: 2,
  }

  return (
    <QuestionnaireWrapper config={questionConfig}>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-[#3b3345] mb-4 leading-tight">
          ¿Hay antecedentes de caída del cabello en tu familia?
        </h2>
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
      </div>
    </QuestionnaireWrapper>
  )
}
