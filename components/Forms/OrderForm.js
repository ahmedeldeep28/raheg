import { FormField } from './Form'
import { Formik, Form } from 'formik';
import { toast } from 'react-toastify';
import { object, string } from 'yup';
import { postApi } from '../../utils/handelApi';
import { useContext } from 'react'
import { cartContext } from '../../context/cartContext'
import {useRouter} from "next/router"

function OrderForm({ orderInfo, fromCart }) {

    const { clearCart } = useContext(cartContext)
    const {push} = useRouter()
    
    const total = orderInfo.map((el) => {
        return el.amount * el.productPrice + 50
    })

    const initialValues = {
        products: orderInfo,
        fullName: '',
        phone: '',
        area: '',
        city: '',
        address: '',
        total: total,
    }

    const validationSchema = object({
        fullName: string().min(3, "هذا الحقل لا يقل عن 3 حروف").max(20, "هذا الحقل لا يزيد عن 20 حرف").required("يجب ان تملاء هذا الحقل"),
        phone: string().required("يجب ان تملاء هذا الحقل").min(10, "هذا الحقل لا يقل عن 10 ارقام").max(16, "هذا الحقل لا يزيد عن 16 رقم"),
        area: string().required("يجب ان تملاء هذا الحقل"),
        city: string().required("يجب ان تملاء هذا الحقل"),
        address: string().min(6, "هذا الحقل لا يقل عن 6 حروف").max(70, "هذا الحقل لا يزيد عن 70 حرف").required("يجب ان تملاء هذا الحقل"),
    })
    const onSubmit = async (valus, actions) => {
        try {
            const { orderId } = await postApi("order/create", valus)
            push(`/order/${orderId}`)

            toast.success('The product has been ordered successfully', {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            actions.resetForm()
            if (fromCart) clearCart()

        } catch (error) {
            toast.error(error, {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
        }
    }

    return (
        <>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                {(props) => {
                    return <Form>
                        <FormField propsInput={props} type="text" name="fullName" label="اسمك" placeholder="اكتب اسمك" />
                        <FormField propsInput={props} type="text" name="phone" label="رقم الموبيل" placeholder="اكتب رقم الموبيل" />
                        <FormField propsInput={props} type="text" name="area" label="المحافظه" placeholder="اكتب المحافظه " />
                        <datalist id="area">
                            <option value="الغربية">الغربية</option>
                            <option value="الجيزة">الجيزة</option>
                            <option value="الإسماعيلية">الإسماعيلية</option>
                            <option value="كفر الشيخ">كفر الشيخ</option>
                            <option value="مطروح">مطروح</option>
                            <option value="المنيا">المنيا</option>
                            <option value="المنوفية">المنوفية</option>
                            <option value="الوادي الجديد">الوادي الجديد</option>
                            <option value="شمال سيناء">شمال سيناء</option>
                            <option value="بورسعيد">بورسعيد</option>
                            <option value="القليوبية">القليوبية</option>
                            <option value="قنا">قنا</option>
                            <option value="البحر الأحمر">البحر الأحمر</option>
                            <option value="الشرقية">الشرقية</option>
                            <option value="سوهاج">سوهاج</option>
                            <option value="جنوب سيناء">جنوب سيناء</option>
                            <option value="السويس">السويس</option>
                            <option value="الأقصر">الأقصر</option>
                            <option value="القاهرة">القاهرة</option>
                            <option value="الإسكندرية">الإسكندرية</option>
                            <option value="الفيوم">الفيوم</option>
                            <option value="أسوان">أسوان</option>
                            <option value="أسيوط">أسيوط</option>
                            <option value="البحيرة">البحيرة</option>
                            <option value="بني سويف">بني سويف</option>
                            <option value="الدقهلية">الدقهلية</option>
                            <option value="دمياط">دمياط</option>
                        </datalist>
                        <FormField propsInput={props} type="text" name="city" label="المدينه" placeholder="اكتب  المدينه" />
                        <FormField propsInput={props} name="address" label="العنوان" placeholder="اكتب العنوان " />
                        <p>اجمالي المطلوب دفعه: {total} جنيه</p>
                        <button className="btn btn-primary" disabled={props.isSubmitting}>
                            {props.isSubmitting
                                ?
                                <>
                                    جاري الطلب
                                    <div className="spinner-border  spinner-border-sm text-dark" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </>
                                : 'اطلب المنتجات الان'}

                        </button>
                    </Form>
                }}
            </Formik>
        </>

    )
}

export default OrderForm