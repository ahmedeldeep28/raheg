import Image from 'next/image'

function ReviweCard() {
    return (
        <div className="card rounded" >
            <div className="card-body p-4">
                <div className="fs-2 text-primary text-center">
                    <Image src="/icons/quote-left-33.png" width={35} height={35} alt="quote" />
                </div>
                <p className="card-text fs-4 lead py-5 px-4 text-start">هذا النص هو مثال لنص يمكن أن يستبدل
                    في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن
                    تولد مثل هذ </p>
            </div>
            <div className="card-footer py-3" >
                <div className="avatar d-flex align-items-center" >
                    <div className="qoute-icon text-white">
                        <Image src="/icons/get-quote-22.png"  width={23} height={23} alt="" />
                    </div>
                    <span className="clint-name m-2">
                        احمد عصام
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ReviweCard