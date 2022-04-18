import styles from './FormsControl.module.css';

const FormControl = (Element, className = '', id = '') => ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <Element id={id} className={className} {...input} {...props} />
            <div>
                {hasError && <span>{meta.error}</span>}
            </div>
        </div>
    )
}

export const Textarea = FormControl('textarea', "form-control", "comment");
export const Input = FormControl('input');
