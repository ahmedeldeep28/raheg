/* eslint-disable react/no-unescaped-entities */
import { fetchApi } from '../../utils/handelApi';
import { useEffect } from 'react';

function Order({ order }) {
    const { fullName, phone, area, city, address, status, products, date, total } = order

    const productlist = products.map((el, idx) => {
        return (
            <tr key={el.productId}>
                <td>{idx}</td>
                <th>{el.productName}</th>
                <td>{el.productPrice} جنيه</td>
                <td>{el.amount} {el.typeAmount}</td>
                <td>{el.amount * el.productPrice} جنيه</td>
            </tr>
        )
    })
    useEffect(() => {
        const modal = document.querySelector(".modal-backdrop")
        if (modal) {
            modal.classList.add("d-none")
        }
    }, [])
    return (
        <>
            <section className="order" dir="rtl">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 mb-5">
                            <h2>متابعة الطلب الخاص بك</h2>
                            <div className="card mt-3 p-3">
                                <ul className="list">
                                    <h5 className="">بيانات العمل</h5>
                                    <li className="list-item">
                                        <span className="key me-2">اسم العميل:</span>
                                        {fullName}
                                    </li>
                                    <li className="list-item">
                                        <span className="key me-2">رقم الموبيل:</span>
                                        {phone}
                                    </li>
                                    <li className="list-item">
                                        <span className="key me-2">المحافظه:</span>
                                        {area}
                                    </li>
                                    <li className="list-item">
                                        <span className="key me-2">المدينه:</span>
                                        {city}
                                    </li>
                                    <li className="list-item">
                                        <span className="key me-2">العنوان:</span>
                                        {address}
                                    </li>
                                    <h5 className="mt-4">بيانات الشحن</h5>

                                    <li className="list-item">
                                        <span className="key me-2">مصاريف الشحن:</span>
                                        35 جنية
                                    </li>
                                    <li className="list-item">
                                        <span className="key me-2">اجمالي المطلوب دفعه :</span>
                                        {total} جنية
                                    </li>
                                    
                                    <li className="list-item">
                                        <span className="key me-2">تاريخ الطلب:</span>
                                        {date} 
                                    </li>
                                    <li className="list-item">
                                        <span className="key me-2">حالة الطلب:</span>
                                        {status}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <h2 className="h2">المنتجات التي طلبتها</h2>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">المنتج</th>
                                        <th scope="col">السعر</th>
                                        <th scope="col">الكمية</th>
                                        <th scope="col">الاجمالي</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {productlist}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Order


export async function getServerSideProps({ params }) {
    const { orderId } = params;
    try {
        const { order } = await fetchApi(`order/${orderId}`);
        return {
            props: {
                order,
            },
        }
    } catch (error) {
        return {
            notFound: true
        }
    }
}