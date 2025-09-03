"use client"

import type React from "react"
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

export default function QuestionnaireLayout({ children }: QuestionnaireLayoutProps) {
  return (
    <div className="min-h-screen bg-[#6042aa] flex items-center justify-center p-4">
      <div className="w-full max-w-sm bg-[#ffffff] min-h-screen flex flex-col rounded-3xl shadow-2xl overflow-hidden">
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
    <>
      <QuestionnaireHeader onBack={handleBack} onWhatsApp={handleWhatsApp} />
      <ProgressBar progress={progress} />
      <div className="flex-1 px-4">{children}</div>
      <div className="p-4">
        <button
          className="w-full bg-[#292929] text-white py-4 rounded-2xl text-lg font-medium hover:bg-[#3b3345] transition-colors"
          onClick={handleContinue}
        >
          Continuar
        </button>
      </div>
    </>
  )
}
