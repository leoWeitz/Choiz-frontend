import { Clock } from "lucide-react"

interface StepProps {
  text: string
  lineUpLength?: number
  lineDownLength?: number
  showTimeIndicator?: boolean
  timeText?: string
}

export function Step({ text, lineUpLength = 0, lineDownLength = 0, showTimeIndicator = false, timeText }: StepProps) {
  return (
    <div className="flex items-center gap-5 relative">
      {lineUpLength > 0 && (
        <div
          className="absolute left-2 bg-[#e0e0e0] w-px"
          style={{
            top: `-${lineUpLength}px`,
            height: `${lineUpLength}px`,
          }}
        ></div>
      )}
      {lineDownLength > 0 && (
        <div
          className="absolute left-2 bg-[#e0e0e0] w-px"
          style={{
            bottom: `-${lineDownLength}px`,
            height: `${lineDownLength}px`,
          }}
        ></div>
      )}

      <div className="w-4 h-4 rounded-full border-2 border-[#e0e0e0] bg-white flex-shrink-0 z-10"></div>

      <div className="flex-1">
        <div className="flex items-center justify-between">
          <span className="text-[#666768] text-base">{text}</span>
          {showTimeIndicator && timeText && (
            <div className="flex items-center gap-1 text-[#9f7cf7] text-sm">
              <Clock className="w-4 h-4" />
              <span>{timeText}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

