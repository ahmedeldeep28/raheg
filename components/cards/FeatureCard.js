import Image from 'next/image'

function FeatureCard({ title, text, image }) {
    return (
        <div className="services-tem p-2 text-center">
            <div className="head">
                <Image src={`${image}`} width={64} height={64} alt="aa" />
            </div>
            <h4 className="mt-4">{title}</h4>
            <p className="mt-3">{text}</p>
        </div>
    )
}

export default FeatureCard