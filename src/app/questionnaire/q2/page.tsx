"use client"

import { QuestionOption } from "@/components/QuestionOption"
import { QuestionnaireWrapper } from "../layout"
import { useEffect, useState } from "react"
import { useSelectionContext } from "../layout"

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
      <Question2Content />
    </QuestionnaireWrapper>
  )
}

function Question2Content() {
  const [selectedOptionsLocal, setSelectedOptionsLocal] = useState<string[]>(localStorage.getItem("respuesta2") ? JSON.parse(localStorage.getItem("respuesta2") || "") : [])
  const [otherText, setOtherText] = useState("")
  const { setIsOptionSelected, setSelectedOptions, selectedOptions } = useSelectionContext()
  useEffect(() => {
    if (selectedOptions.length === 0 && selectedOptionsLocal.length > 0) {
      setSelectedOptions(selectedOptionsLocal)
      setIsOptionSelected(true)
    }
  }, [selectedOptions, selectedOptionsLocal, setSelectedOptions, setIsOptionSelected])
  
  const handleOptionChange = (optionId: string) => {
    localStorage.setItem(`respuesta2`, JSON.stringify(optionId))
    setSelectedOptionsLocal((prev) => {
      setIsOptionSelected(true)
      if (optionId === "none") {
        return ["none"]
      }
      const newSelection = [optionId]
      setSelectedOptions(newSelection)
      return newSelection.length === 0 ? ["none"] : newSelection
    })
  }

  const options = [
    { id: "no", label: "No" },
    { id: "yes", label: "Sí" },
    { id: "idk", label: "No estoy seguro" },
  ]

  return (
    <>
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
            selected={selectedOptionsLocal.includes(option.id)}
            onChange={handleOptionChange}
          />
        ))}
      </div>
    </>
  )
}
