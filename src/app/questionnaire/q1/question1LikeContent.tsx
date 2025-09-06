"use client"

import { QuestionOption } from "@/components/QuestionOption";
import { useEffect, useState } from "react";
import { useSelectionContext } from "../selectionContext";

export type FormOption = {
    id: string,
    label: string
  }

export function Question1LikeContent({title, formOptions, step} : {title:string, formOptions: FormOption[], step:number}) {
    const [selectedOptionsLocal, setSelectedOptionsLocal] = useState<string[]>(() => {
        if (typeof window !== "undefined") {
          const stored = localStorage.getItem(`pregunta${step}`)
          return stored ? JSON.parse(stored) : []
        }
        return []
      })
    const [otherText, setOtherText] = useState("")
    const { setIsOptionSelected, setSelectedOptions, selectedOptions } = useSelectionContext();
    
    useEffect(() => {
        if (selectedOptions.length === 0 && selectedOptionsLocal.length > 0) {
        setSelectedOptions(selectedOptionsLocal)
        setIsOptionSelected(true)
      }
      localStorage.setItem(`pregunta${step}`, JSON.stringify(selectedOptionsLocal))
    }, [selectedOptions, selectedOptionsLocal, setSelectedOptions, setIsOptionSelected])
    const handleOptionChange = (optionId: string) => {
      setSelectedOptionsLocal((prev) => {
        if (optionId === "none") {
          return ["none"]
        }
        const newSelection = prev.includes(optionId)
        ? prev.filter((id) => id !== optionId)
        : [...prev.filter((id) => id !== "none"), optionId]
        return newSelection.length === 0 ? ["none"] : newSelection
      })
    }
  
    useEffect(() => {
      if (selectedOptionsLocal.includes("other")) {
          localStorage.setItem(`pregunta${step}Other`, otherText)
      }
    }, [otherText, selectedOptionsLocal, step])
    
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