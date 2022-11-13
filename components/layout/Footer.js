import Link from 'next/link'

function Footer() {
  return (
    <footer className="py-5 mt-5 bg-secondary" dir="rtl">
        <div className="container">
            <div className="row gx-4">
                <div className="col-md-4 mt-4">
                    <h3 className="mb-4 text-capitalize">رحيق</h3>
                    <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذ</p>
                    <p className="fw-bold fs-4">01551734799</p>
                </div>
                <div className="col-md-2 mt-4 ">
                    <ul className="list-unstyled">
                        <h4 className="mb-4">صفحات</h4>
                        <li className="mb-2 text-capitalize">
                            <Link href="/" className="text-dark d-block fs-5">الرئيسية</Link>
                        </li>
                        <li className="mb-2 text-capitalize">
                            <Link href="/shop" className="text-dark d-block fs-5">المتجر</Link>
                        </li>
                        <li className="mb-2 text-capitalize">
                            <Link href="/offer" className="text-dark d-block fs-5">العروض</Link>
                        </li>
                        <li className="mb-2 text-capitalize">
                            <Link href="/blog" className="text-dark d-block fs-5">المقالات</Link>
                        </li>
                        <li className="mb-2 text-capitalize">
                            <Link href="/contact" className="text-dark d-block fs-5">اتصل بنا</Link>
                        </li>
                    </ul>
                </div>

                <div className="col-md-4 mt-4 ms-auto">
                    <h4 className="mb-4">تابع كل جديد</h4>
                    <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص</p>
                    <form action="">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="اكتب البريد الاكتروني"
                                aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button className="btn btn-outline-primary" type="button">اشترك </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer