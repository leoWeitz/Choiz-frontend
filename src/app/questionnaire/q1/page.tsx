"use client"

import { QuestionOption } from "@/components/QuestionOption"
import { QuestionnaireWrapper } from "../layout"
import { useEffect, useState } from "react"
import { useSelectionContext } from "../layout"

export type FormOption = {
  id: string,
  label: string
}

export default function Question1() {

  const questionConfig = {
    step: 1,
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
    <QuestionnaireWrapper config={questionConfig}>
      <Question1LikeContent title="¿Tienes algún problema en el cuero cabelludo?" formOptions={options} step={1}/>
    </QuestionnaireWrapper>
  )
}

export function Question1LikeContent({title, formOptions, step} : {title:string, formOptions: FormOption[], step:number}) {
  const [selectedOptionsLocal, setSelectedOptionsLocal] = useState<string[]>(localStorage.getItem(`pregunta${step}`) ? JSON.parse(localStorage.getItem(`pregunta${step}`) || "") : [])
  const [otherText, setOtherText] = useState("")
  const { setIsOptionSelected, setSelectedOptions, selectedOptions } = useSelectionContext();
  if(selectedOptionsLocal.length > 0) {
    setSelectedOptions(selectedOptionsLocal)
    setIsOptionSelected(true)
  }
  const handleOptionChange = (optionId: string) => {
    setSelectedOptionsLocal((prev) => {
      setIsOptionSelected(true);
      if (optionId === "none") {
        localStorage.setItem(`pregunta${step}`, JSON.stringify(["none"]))
        return ["none"]
      }
      const newSelection = prev.includes(optionId)
      ? prev.filter((id) => id !== optionId)
      : [...prev.filter((id) => id !== "none"), optionId]
      localStorage.setItem(`pregunta${step}`, JSON.stringify(newSelection))
      setSelectedOptions(newSelection)
      return newSelection.length === 0 ? ["none"] : newSelection
    })
  }

  useEffect(() => {
    if (selectedOptionsLocal.includes("other")) {
        localStorage.setItem(`pregunta${step}Other`, otherText)
    }
  }, [otherText])
  
  return (
    <>
      <div className="mb-8">
          <h2 className="text-2xl font-semibold text-[#3b3345] mb-4 leading-tight">
            {title}
          </h2>
          <p className="text-[#666768] text-base">Selecciona todas las opciones que apliquen.</p>
        </div>

        <div className="space-y-3 mb-8">
          {formOptions.map((option) => (
            <QuestionOption
              key={option.id}
              id={option.id}
              label={option.label}
              selected={selectedOptionsLocal.includes(option.id)}
              onChange={handleOptionChange}
            />
          ))}

          {selectedOptionsLocal.includes("other") && (
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
