"use client"

import { QuestionnaireWrapper } from "../questionnaireWrapper"
import { Question1LikeContent } from "../q1/question1LikeContent"

export default function Question3() {
    const options = [
        { id: "breastCancer", label: "Cáncer de mama" },
        { id: "prostateCancer", label: "Cáncer de próstata" },
        { id: "lowPressure", label: "Presión arterial baja incontrolada" },
        { id: "otherDisease", label: "Otras enfermedades autoinmunes o reumáticas" },
        { id: "thiroide", label: "Problemas de tiroides" },
        { id: "heart", label: "Enfermedades del corazón" },
        { id: "liver", label: "Enfermedades del riñón o hígado" },
        { id: "none", label: "No, ninguna de las anteriores" },
    ]
    
    return(
        <QuestionnaireWrapper config={{step: 3}}>
            <Question1LikeContent title="¿Tienes o has tenido alguna de las siguientes condiciones médicas?" formOptions={options} step={3}/>
        </QuestionnaireWrapper>
    )
}