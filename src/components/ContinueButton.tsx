const ContinueButton = ({text, disabled, onClick}: {text:string, disabled:boolean, onClick?:(event: React.MouseEvent<HTMLButtonElement>) => void}) => {
    return (
        <button className="w-full mx-auto bg-[#292929] hover:bg-[#424b54] text-white py-4 rounded-full text-lg font-medium transition-colors disabled:bg-gray-400 disabled:text-gray-200"
            disabled={disabled}
            onClick={onClick}
        >
            {text}
        </button>
    )
};

export default ContinueButton;