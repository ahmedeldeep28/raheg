import { Field, ErrorMessage } from "formik";

export function FormField({ propsInput, className, name, label, ...rest }) {
    const { errors, touched } = propsInput
    return (
        <div className="mb-3">
            <label className="form-label" htmlFor={name}>
                {label}
            </label>
            <Field
                className={`form-control ${className} ${(errors[name] && touched[name]) ? "is-invalid" : ""}  ${(!errors[name] && touched[name]) ? "is-valid" : ""}`}
                name={name}
                {...rest}
            />
            <ErrorMessage name={name}>
                {(errMesg) => <p className="invalid-feedback">{errMesg}</p>}
            </ErrorMessage>
        </div>
    )
}

export function FormSelect({ propsInput, className, name, label, type, children, ...rest }) {
    const { errors, touched } = propsInput
    return (
        <div className="mb-3">
            <label className="form-label" htmlFor={name}>
                {label}
            </label>
            <Field
                className={`form-control ${className}
                ${(errors[name] && touched[name]) ? "is-invalid" : ""} 
                ${(!errors[name] && touched[name]) ? "is-valid" : ""}`}

                name={name}
                {...rest}
                as="select">
                {children}
            </Field>
            <ErrorMessage name={name}>
                {(errMesg) => <p className="invalid-feedback">{errMesg}</p>}
            </ErrorMessage>
        </div>
    )
}
