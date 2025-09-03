import Link from "next/link";
import { Step } from "@/components/Step";
import ContinueButton from "@/components/ContinueButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#6042aa] to-[#9f7cf7] flex flex-col">

      {/* Main Content */}
      <div className="relative flex flex-1 flex-col items-center px-6">
        {/* Profile Image */}
        <div className="w-full max-w-md mb-0 relative">
          <img
            src="/person.png"
            alt="Smiling man in purple polo shirt holding phone"
            className="w-full max-w-md h-full object-cover object-center rounded-t-3xl translate-y-1/20 z-0"
          />
          
          <h1 className="absolute top-10 left-1/2 transform -translate-x-5/2 text-white text-3xl font-bold">
          Choiz
          </h1>
        </div>
        {/* Welcome Card */}
        <div className="bg-white rounded-3xl w-full max-w-md flex-1 p-10 pb-8 space-y-20 z-1">
          <h2 className="text-[#6042aa] text-2xl font-bold mb-2">Bienvenido a Choiz</h2>

          <p className="text-[#666768] text-base mb-8">Comienza tu tratamiento en tres pasos:</p>

          <div className="space-y-7 mb-7">
            <Step text="Completa tu expediente médico" lineDownLength={16} showTimeIndicator={true} timeText="2 min" />
            <Step text="Explora las opciones de tratamiento" lineUpLength={16} lineDownLength={16} />
            <Step text="Paga y recibe tu tratamiento" lineUpLength={16} />
          </div>
          <div className="mt-30">
            <Link href="/questionnaire/q1">
              <ContinueButton/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
