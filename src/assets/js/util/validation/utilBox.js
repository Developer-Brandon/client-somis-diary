import { UtilBoxState } from '@/assets/js/enums/UtilBoxState'
import { CatGenderState } from '@/assets/js/enums/CatGenderState'

export default class UtilBox {
  constructor(type = UtilBoxState.DEFAULT, value = '') {
    this._type = type
    this._value = value
  }

  set type(type) {
    this._type = type
  }

  get type() {
    return this._type
  }

  set value(value) {
    this._value = value
  }

  get value() {
    return this._value
  }

  // 숫자만 입력받는 input tag 의 경우 어느정도 강제로 변환시킬 필요가 있어서 이렇게 해놓았습니다
  convertNumber(value) {
    const NUMBER_REGEX = /[^0-9]/g
    return value.replace(NUMBER_REGEX, '')
  }

  get validateEmail() {
    const EMAIL_REGEX = /^[0-9a-zA-Z]{1,10}([-_.]?[0-9a-zA-Z])*[0-9a-zA-Z]*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
    if (this._type === UtilBoxState.EMAIL) {
      if (this._value !== '') {
        if (EMAIL_REGEX.test(this._value)) {
          return true
        }
        return false
      }
      return false
    }
    return false
  }

  // 여기서의 phoneNumber는 '숫자'로만 이루어진 여기에서만 쓰이는 phoneNumber 입니다. 길이체크는 넣어야하니 따로 만들었습니다
  get validatePhoneNumber() {
    const NUMBER_REGEX = /^[0-9]+$/
    if (this._type === UtilBoxState.PHONE_NUMBER) {
      if (this._value !== '' && this._value.length === 11) {
        if (NUMBER_REGEX.test(this._value)) {
          return true
        }
        return false
      }
      return false
    }
    return false
  }

  get validatePhoneNumberWithDash() {
    const PHONE_NUMBER_REGEX = /^\d{3}-\d{3,4}-\d{4}$/
    if (this._type === UtilBoxState.PHONE_NUMBER) {
      if (PHONE_NUMBER_REGEX.test(this._value)) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  }

  get validateNumber() {
    const NUMBER_REGEX = /^[0-9]+$/
    if (this._type === UtilBoxState.NUMBER) {
      if (this._value !== '') {
        if (NUMBER_REGEX.test(this._value)) {
          return true
        }
        return false
      }
      return false
    }
    return false
  }

  get validateFile() {
    return true
  }

  get validateName() {
    if (this._value.length >= 1) {
      return true
    }
    return false
  }

  get validateBirthday() {
    const BIRTHDAY_REGEX = /^[0-9]{4}[-]+[0-9]{2}[-]+[0-9]{2}$/
    if (this._type === UtilBoxState.BIRTHDAY) {
      if (this._value.match(BIRTHDAY_REGEX)) {
        return true
      }
      return false
    }
    return false
  }

  get validateGender() {
    if (this._type === UtilBoxState.GENDER) {
      if (this._value === CatGenderState.MAN || this._value === CatGenderState.WOMAN) {
        return true
      }
      return false
    }
    return false
  }

  get validateSpecies() {
    // TODO: 고양이 종은 국제적으로 정해놓은 것 말고도, 길거리 고양이 같은 종도 있는데 이부분은 어찌해야할지 결정해야 할 것 같다
    if (this._type === UtilBoxState.SPECIES) {
      return true
    }
    return false
  }

  get validateKg() {
    if (this._type === UtilBoxState.KG) {
      if (this._value.length >= 2 && this._value <= 99) {
        return true
      }
      return false
    }
    return false
  }
}
