"use client"

import type React from "react"
import { createContext, useState, useContext} from "react"
import { QuestionnaireHeader } from "@/components/QuestionnaireHeader"
import { ProgressBar } from "@/components/ProgressBar"
import { useRouter } from "next/navigation"

interface QuestionnaireConfig {
  step: number
  nextUrl?: string
  backUrl?: string
  onContinue?: () => void
}

interface QuestionnaireLayoutProps {
  children: React.ReactNode
}

type selectionContextType = {
  isOptionSelected: boolean,
  setIsOptionSelected: (value: boolean) => void,
  selectedOptions: string[],
  setSelectedOptions: (value: string[]) => void,
}

const SelectionContext = createContext<selectionContextType | null>(null);

export function useSelectionContext() {
  const context = useContext(SelectionContext);
  if (!context) {
    throw new Error("useSelectionContext must be used within a SelectionProvider");
  }
  return context;
}

export default function QuestionnaireLayout({ children }: QuestionnaireLayoutProps) {
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#6042aa] to-[#9f7cf7] flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-[#ffffff] min-h-screen flex flex-col rounded-3xl shadow-2xl overflow-hidden">
        {children}
      </div>
    </div>
  )
}

export function QuestionnaireWrapper({
  children,
  config,
}: {
  children: React.ReactNode
  config: QuestionnaireConfig
}) {
  const router = useRouter()
  const progress = (config.step / 6) * 100
  const [isOptionSelected, setIsOptionSelected] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])

  const handleBack = () => {
    if (config.backUrl) {
      router.push(config.backUrl)
    } else if (config.step > 1) {
      router.push(`/questionnaire/q${config.step - 1}`)
    } else {
      router.push("/")
    }
  }

  const handleWhatsApp = () => {
    console.log("WhatsApp clicked")
  }

  const handleContinue = () => {
    localStorage.setItem(`response${config.step}`, JSON.stringify(selectedOptions))
    if (config.onContinue) {
      config.onContinue()
    } else if (config.nextUrl) {
      router.push(config.nextUrl)
    } else if (config.step < 6) {
      router.push(`/questionnaire/q${config.step + 1}`)
    } else {
      router.push("/questionnaire/results")
    }
  }

  return (
    <SelectionContext.Provider value={{ isOptionSelected, setIsOptionSelected, selectedOptions, setSelectedOptions }}>
      <QuestionnaireHeader onBack={handleBack} onWhatsApp={handleWhatsApp} />
      <ProgressBar progress={progress} />
      <div className="flex-1 px-4">{children}</div>
      <div className="p-4">
        <button
          className={`w-full bg-[#292929] text-white py-4 rounded-2xl text-lg font-medium hover:bg-[#3b3345] transition-colors disabled:bg-gray-400 disabled:text-gray-200
            `}
          disabled={!isOptionSelected}
          
          onClick={handleContinue}
        >
          Continuar
        </button>
      </div>
    </SelectionContext.Provider>
  )
}
