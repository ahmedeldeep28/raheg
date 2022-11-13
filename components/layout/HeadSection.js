
function HeadSection({ title, subTitle }) {
    return (
        <div className="row mt-5 mb-5 justify-content-center">
            <div className="col-md-4 text-center">
                <span className="fs-4 text-primary">{subTitle}</span>
                <h2 className="fs-2">{title}</h2>
            </div>
        </div>
    )
}

export default HeadSection