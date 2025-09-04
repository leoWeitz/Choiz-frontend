"use client"

import { QuestionnaireWrapper } from "../layout"
import { Question1LikeContent } from "../q1/page"

export default function Question4() {
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
        <QuestionnaireWrapper config={{step: 4}}>
            <Question1LikeContent formOptions={options} />
        </QuestionnaireWrapper>
    )
}