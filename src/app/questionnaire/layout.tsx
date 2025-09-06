"use client"

import type React from "react"

interface QuestionnaireLayoutProps {
  children: React.ReactNode
}


export default function QuestionnaireLayout({ children }: QuestionnaireLayoutProps) {
  
  return (
    <div className=" bg-gradient-to-b from-[#6042aa] to-[#9f7cf7] flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-[#ffffff] min-h-screen flex flex-col rounded-3xl shadow-2xl overflow-hidden">
        {children}
      </div>
    </div>
  )
}


