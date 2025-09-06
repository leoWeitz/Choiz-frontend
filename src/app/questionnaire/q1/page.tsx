"use client"

import { QuestionOption } from "@/components/QuestionOption"
import { QuestionnaireWrapper } from "../questionnaireWrapper"
import { useEffect, useState } from "react"
import { useSelectionContext } from "../selectionContext"
import { Question1LikeContent } from "./question1LikeContent"

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


