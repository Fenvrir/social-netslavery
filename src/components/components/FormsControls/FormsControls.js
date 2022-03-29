import styles from './FormsControl.module.css';

const FormControl = Element => ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <Element {...input} {...props} />
            <div>
                {hasError && <span>{meta.error}</span>}
            </div>
        </div>
    )
}

export const Textarea = FormControl('textarea');


export const Input = FormControl('input');