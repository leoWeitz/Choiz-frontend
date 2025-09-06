"use client"

import { useEffect, useState } from "react"
import { QuestionnaireWrapper } from "../questionnaireWrapper"
import LightBox from "@/components/LightBox"
import FAQitem from "@/components/FAQitem"

export default function EndPage() {
    return (
        <QuestionnaireWrapper config={{step: 6, backUrl:"/questionnaire/recommendation"}}>
            <EndPageContent />
        </QuestionnaireWrapper>
    )
}

function EndPageContent() {
    const [q1answers, setQ1Answers] = useState<string[]>([])
    const [q2answer, setQ2Answer] = useState<string[]>([])
    const [q3answers, setQ3Answers] = useState<string[]>([])
    const [q4answers, setQ4Answers] = useState<string[]>([])
    const [q1otherText, setQ1OtherText] = useState<string>("")
    const [wereAllQanswered, setWereAllQAnswered] = useState(false)

    const options1 = [
        { id: "pain", label: "Dolor repentino y/o enrojecimiento" },
        { id: "dandruff", label: "Caspa" },
        { id: "psoriasis", label: "Psoriasis" },
        { id: "sunburn", label: "Quemadura de sol" },
        { id: "other", label: "Otro" },
        { id: "none", label: "No, ninguno de los anteriores" },
    ]

    const options2 = [
        { id: "no", label: "No" },
        { id: "yes", label: "Sí" },
        { id: "idk", label: "No estoy seguro" },
    ]

    const options3 = [
        { id: "breastCancer", label: "Cáncer de mama" },
        { id: "prostateCancer", label: "Cáncer de próstata" },
        { id: "lowPressure", label: "Presión arterial baja incontrolada" },
        { id: "otherDisease", label: "Otras enfermedades autoinmunes o reumáticas" },
        { id: "thiroide", label: "Problemas de tiroides" },
        { id: "heart", label: "Enfermedades del corazón" },
        { id: "liver", label: "Enfermedades del riñón o hígado" },
        { id: "none", label: "No, ninguna de las anteriores" },
    ]

    const options4 = [
        { id: "depression", label: "Depresión" },
        { id: "bipolarDisorder", label: "Desorden de bipolaridad" },
        { id: "anxiety", label: "Ansiedad" },
        { id: "panicAttacks", label: "Ataques de pánico" },
        { id: "ptsd", label: "Desorden de estrés postraumático" },
        { id: "schizophrenia", label: "Esquizofrenia" },
        { id: "none", label: "No, ninguno de los anteriores" },
    ]

    useEffect(() => {
        if (!localStorage.getItem("pregunta1") || !localStorage.getItem("pregunta2") || !localStorage.getItem("pregunta3") || !localStorage.getItem("pregunta4") ) {
            console.log(localStorage.getItem("pregunta1"), localStorage.getItem("pregunta2"), localStorage.getItem("pregunta3"), localStorage.getItem("pregunta4"))
            setWereAllQAnswered(false)
            return
        }
        setWereAllQAnswered(true)
        setQ1Answers(localStorage.getItem("pregunta1") ? JSON.parse(localStorage.getItem("pregunta1") || "") : [])
        setQ3Answers(localStorage.getItem("pregunta3") ? JSON.parse(localStorage.getItem("pregunta3") || "") : [])
        setQ4Answers(localStorage.getItem("pregunta4") ? JSON.parse(localStorage.getItem("pregunta4") || "") : [])
        setQ2Answer(localStorage.getItem("pregunta2") ? JSON.parse(localStorage.getItem("pregunta2") || "") : [])
        setQ1OtherText(localStorage.getItem("pregunta1Other") || "")
    }, [])

    if (!wereAllQanswered) {
        return (
            <>
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-[#3b3345] mb-4 leading-tight">
                    Por favor, responde todas las preguntas para ver tu recomendación personalizada.
                    </h2>
                </div>
            </>
        )
    }
    
    return (
        <>
            <div className="flex flex-col items-center justify-center text-center px-6 mt-20 mb-10">
                <h1 className="text-3xl font-bold text-[#3b3345] mb-4">¡Gracias por completar el cuestionario!</h1>
                <p className="text-[#666768] text-base mb-6">Repaso de tus respuestas:</p>
            </div>

            <LightBox>
                <div>
                    <FAQitem question="¿Tienes algún problema en el cuero cabelludo?" answer={
                            q1answers
                            .map(ans => {
                                if (ans === "other") return "Otro: " + q1otherText
                                const found = options1.find(opt => opt.id === ans)
                                return found ? found.label : ans
                            })
                            .join(", ") || "No respondido"
                        } isLastItem={false}/>
                    <FAQitem question="¿Hay antecedentes de caída del cabello en tu familia?" answer={
                            q2answer
                            .map(ans => {
                                const found = options2.find(opt => opt.id === ans)
                                return found ? found.label : ans
                            })
                            .join(", ") || "No respondido"                        
                        } isLastItem={false}/>
                    <FAQitem question="¿Tienes o has tenido alguna de las siguientes condiciones médicas?" answer={
                            q3answers
                            .map(ans => {
                                const found = options3.find(opt => opt.id === ans)
                                return found ? found.label : ans
                            })
                            .join(", ") || "No respondido"
                        } isLastItem={false}/>
                    <FAQitem question="¿Tienes o has tenido alguna de las siguientes condiciones de salud mental?" answer={
                            q4answers
                            .map(ans => {
                                const found = options4.find(opt => opt.id === ans)
                                return found ? found.label : ans
                            })
                            .join(", ") || "No respondido"
                        } isLastItem={true}/>
                </div>
            </LightBox>
        </>
    )
}