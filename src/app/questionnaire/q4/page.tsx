"use client"

import { QuestionnaireWrapper } from "../questionnaireWrapper"
import { Question1LikeContent } from "../q1/question1LikeContent"

export default function Question4() {
    const options = [
        { id: "depression", label: "Depresión" },
        { id: "bipolarDisorder", label: "Desorden de bipolaridad" },
        { id: "anxiety", label: "Ansiedad" },
        { id: "panicAttacks", label: "Ataques de pánico" },
        { id: "ptsd", label: "Desorden de estrés postraumático" },
        { id: "schizophrenia", label: "Esquizofrenia" },
        { id: "none", label: "No, ninguno de los anteriores" },
    ]
    
    return(
        <QuestionnaireWrapper config={{step: 4, nextUrl: "/questionnaire/recommendation"}}>
            <Question1LikeContent title="¿Tienes o has tenido alguna de las siguientes condiciones de salud mental?" formOptions={options} step={4}/>
        </QuestionnaireWrapper>
    )
}