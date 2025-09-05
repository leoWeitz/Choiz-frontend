type LightBoxProps = {
    children: React.ReactNode
}

const LightBox = ({children}: LightBoxProps) => {
    return (<div className="mx-auto my-10 bg-white rounded-2xl shadow-md flex p-6">
        {children}
    </div>
    )
}

export default LightBox