import { IS_VALID_EMAIL, IS_VALID_PHONE_NUMBER } from 'globals/enum'
import * as Yup from 'yup'

export const required = Yup.string().required(
  'Nhập thông tin'
)

export const minMaxLength = (min: number, max: number) => {
  const mapObj: {[index: string]:any} = {
    xx: String(min),
    yy: String(max)
  }
  return Yup.string()
    .min(min, 'là dộ dài tối thiểu')
    .max(max, 'giới hạn tối thiểu')
}

export const email = Yup.string()
  .required('Nhập thông tin')
  .test(
    'isEmail',
    'Không đúng định dạng email',
    (value: string): boolean => {
      return IS_VALID_EMAIL.test(value)
    }
  )

  
export const phoneNumber = Yup.string()
.required('Nhập thông tin')
.test(
  'isPhoneNumber',
  'Không đúng định dạng số điện thoại',
  (value: string): boolean => {
    return IS_VALID_PHONE_NUMBER.test(value)
  }
)
