"use client"

import { ArrowLeft, MessageCircle } from "lucide-react"

interface QuestionnaireHeaderProps {
  onBack?: () => void
  onWhatsApp?: () => void
}

export function QuestionnaireHeader({ onBack, onWhatsApp }: QuestionnaireHeaderProps) {
  return (
    <div className="flex items-center justify-between p-4 pb-2">
      <button className="p-2" onClick={onBack}>
        <ArrowLeft className="w-6 h-6 text-[#3b3345]" />
      </button>

      <h1 className="text-xl font-bold text-[#3b3345]">Choiz</h1>

      <button className="p-2" onClick={onWhatsApp}>
        <MessageCircle className="w-6 h-6 text-[#666768]" />
      </button>
    </div>
  )
}
