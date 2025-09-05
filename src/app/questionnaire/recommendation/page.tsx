"use client"

import { useEffect, useState } from "react"
import { QuestionnaireWrapper } from "../layout"
import LightBox from "@/components/LightBox"
import FAQitem from "@/components/FAQitem"
import ContinueButton from "@/components/ContinueButton"

type itemType = {
    question: string,
    answer: string
}

export default function RecommendationPage() {
    const recommendations = [
        { id:"D-c", title: "DUTAXIDIL® Cápsulas", subtitle: "Dutasterida 0.5 mg + Minoxidil 2.5 mg + Biotina 2.5 mg", img:"/D-capsulas.png"},
        { id:"D-g", title: "DUTAXIDIL® Gel", subtitle: "Dutasterida 0.1% + Minoxidil 5 % + Tretinoína 1% + Hidrocortisona 1%", img:"/D-gel.png"},
        { id:"M-c", title: "Minoxidil® Cápsulas", subtitle: "Minoxidil 2.5 mg + Biotina 2.5 mg", img:"/D-capsulas.png"},
    ]
    const [pregunta3Index, setPregunta3Index] = useState<number>(0)

    const [items, setItems] = useState<any>()
        useEffect(() => {
            const fetchData = async () => {
                const res = await fetch("https://679938bebe2191d708b25ceb.mockapi.io/api/faqs")
                const data = await res.json()
                setItems(data)
            }

            fetchData()
        }
    , [])

    useEffect(() => {
    function getPregunta3Index(): number {
        const stored = localStorage.getItem("pregunta3")
        
        if (!stored) return 0
        
        const selected: string[] = JSON.parse(stored)
        
        if (selected.includes("none")) {
            return 0
        }
        
        if (selected.includes("breastCancer") || selected.includes("prostateCancer")) {
            return 2
        }
        
        if (selected.length > 0) {
            return 1
        }
        
        return 0
    }
    setPregunta3Index(getPregunta3Index())
    },[])



    if (!items || items.length === 0) {
        return <div>Cargando FAQs...</div>
    }

    return (
        <QuestionnaireWrapper config={{step: 5}}>
            <div className="mb-8">
                <h2 className="text-2xl font-semibold text-[#3b3345] mb-4 leading-tight">
                Tratamiento recomendado en base a tus respuestas
                </h2>
            </div>
            
            <LightBox>
                <div>
                    <h2 className="text-2xl font-bold text-[#3b3345] leading-tight">{recommendations[pregunta3Index].title}</h2>
                    <p className="text-[#666768] text-base">{recommendations[pregunta3Index].subtitle}</p>
                    <img src={recommendations[pregunta3Index].img} alt={recommendations[pregunta3Index].title} className="mx-auto max-w-52 h-auto"/>
                    <ContinueButton text="Seleccionar" disabled={false}/>
                </div>
            </LightBox>

            <LightBox>
                <div>
                    {items.map((items: itemType, index: number) => (
                        <FAQitem key={index} question={items.question} answer={items.answer} isLastItem={index===2}/>
                    ))}
                </div>
            </LightBox>

        </QuestionnaireWrapper>
    )

}