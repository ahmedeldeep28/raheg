import { FormField,FormSelect } from './Form'
import { Formik, Form } from 'formik';
import { toast } from 'react-toastify';
import { object, string } from 'yup';
import { postApi } from '../../utils/handelApi';

function ContactForm() {

    const initialValues = {
        name: '',
        phone: '',
        object: '',
        message: '',
    }

    const validationSchema = object({
        name: string().min(3,"هذا الحقل لا يقل عن 3 حروف").max(20,"هذا الحقل لا يزيد عن 20 حرف").required("يجب ان تملاء هذا الحقل"),
        phone: string().required("يجب ان تملاء هذا الحقل").min(10,"هذا الحقل لا يقل عن 10 ارقام").max(16,"هذا الحقل لا يزيد عن 16 رقم"),
        object: string().matches(/(شكوي|اقتراح| موضوع اخر)/,"يجيب ان تختار موضوع الرساله").required("يجب ان تملاء هذا الحقل"),
        message: string().min(6,"هذا الحقل لا يقل عن 6 حروف").max(400,"هذا الحقل لا يزيد عن 400 حرف").required("يجب ان تملاء هذا الحقل"),    
    })
    const onSubmit = async (valus,actions) => {
        try{
            await postApi("contact/create",valus)
            toast.success('send message success', {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            actions.resetForm()
        } catch(error) {
            toast.error(error, {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
        }
    }

    return (
        <>
        <Formik initialValues={initialValues} onSubmit={onSubmit}  validationSchema={validationSchema}>
            {(props) => {
                return <Form>
                    <FormField propsInput={props} name="name" label="اسمك" placeholder="اكتب اسمك"/>
                    <FormField propsInput={props} name="phone" label="رقم الموبيل"  placeholder="اكتب رقم الموبيل"/>
                    <FormSelect propsInput={props} name="object" label="موضوع الرساله" >
                        <option >اختر موضوع الرساله</option>
                        <option value="اقتراح">اقتراح</option>
                        <option value="شكوي">شكوي</option>
                        <option value="موضوع اخر">موضوع اخر</option>
                    </FormSelect>
                    <FormField propsInput={props} as="textarea" name="message" label="الرسالة"  placeholder="اكتب رسالتك" />
                    <button className="btn btn-primary" disabled={props.isSubmitting}>
                    
                    {props.isSubmitting 
                        ? 
                        <>
                         جاري الارسال
                        <div className="spinner-border  spinner-border-sm text-dark" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        </>
                    : 'ارسل الرساله'}

                    </button>
                </Form>
            }}
        </Formik>
        </>

    )
}

export default ContactForm