import Image from "next/image";
import { Clock } from "lucide-react"
import { Step } from "@/components/Step";
import ContinueButton from "@/components/ContinueButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#6042aa] to-[#9f7cf7] flex flex-col">
      {/* Header */}
      {/*<div className="p-6">
        <h1 className="text-white text-3xl font-bold">Choiz</h1>
      </div>*/}

      {/* Main Content */}
      <div className="relative flex-1 flex flex-col items-center px-6">
        {/* Profile Image */}
        <img
          src="/person.png"
          alt="Smiling man in purple polo shirt holding phone"
          className="w-full max-w-md h-120 object-cover object-center rounded-t-3xl translate-y-1/20 z-0"
        />
        
        <h1 className="absolute top-10 left-1/2 transform -translate-x-1/4 text-white text-3xl font-bold">
        Choiz
      </h1>
        {/* Welcome Card */}
        <div className="bg-white rounded-t-3xl w-full max-w-md flex-1 p-10 pb-8 z-1">
          <h2 className="text-[#6042aa] text-2xl font-bold mb-2">Bienvenido a Choiz</h2>

          <p className="text-[#666768] text-base mb-8">Comienza tu tratamiento en tres pasos:</p>

          <div className="space-y-4 mb-12">
            <Step text="Completa tu expediente médico" lineDownLength={16} showTimeIndicator={true} timeText="2 min" />
            <Step text="Explora las opciones de tratamiento" lineUpLength={16} lineDownLength={16} />
            <Step text="Paga y recibe tu tratamiento" lineUpLength={16} />
          </div>

          <ContinueButton/>
        </div>
      </div>
    </div>
  );
}
