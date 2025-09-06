"use client"

import { QuestionnaireHeader } from "@/components/QuestionnaireHeader"
import SelectionContext from "./selectionContext"
import { ProgressBar } from "@/components/ProgressBar"
import ContinueButton from "@/components/ContinueButton"
import { useState } from "react"
import { useRouter } from "next/navigation"

interface QuestionnaireConfig {
  step: number
  nextUrl?: string
  backUrl?: string
  onContinue?: () => void
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
          { config.step < 5 &&
          <ContinueButton
            text="Continuar"
            disabled={!isOptionSelected}
            onClick={handleContinue}
          >
          </ContinueButton>
          }
        </div>
      </SelectionContext.Provider>
    )
  }