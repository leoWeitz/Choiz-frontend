interface ProgressBarProps {
    progress: number
  }
  
  export function ProgressBar({ progress }: ProgressBarProps) {
    return (
      <div className="px-4 pb-6">
        <div className="w-full bg-[#e0e0e0] rounded-full h-1">
          <div className="bg-[#6042aa] h-1 rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
        </div>
      </div>
    )
  }
  