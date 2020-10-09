export default class UtilBox {
  constructor(type = 'default', value = '') {
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
    const NUMBER_REGIX = /[^0-9]/g
    return value.replace(NUMBER_REGIX, '')
  }

  get validateEmail() {
    const EMAIL_REGIX = /^[0-9a-zA-Z]{1,10}([-_.]?[0-9a-zA-Z])*[0-9a-zA-Z]*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
    if (this._type === 'email') {
      if (this._value !== '') {
        if (EMAIL_REGIX.test(this._value)) {
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
    const NUMBER_REGIX = /^[0-9]+$/
    if (this._type === 'phoneNumber') {
      if (this._value !== '' && this._value.length === 11) {
        if (NUMBER_REGIX.test(this._value)) {
          return true
        }
        return false
      }
      return false
    }
    return false
  }

  get validationPhoneNumberWithDash() {
    const PHONE_NUMBER_REGIX = /^\d{3}-\d{3,4}-\d{4}$/
    if (this._type === 'phoneNumber') {
      if (PHONE_NUMBER_REGIX.test(this._value)) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  }

  get validateNumber() {
    const NUMBER_REGIX = /^[0-9]+$/
    if (this._type === 'number') {
      if (this._value !== '') {
        if (NUMBER_REGIX.test(this._value)) {
          return true
        }
        return false
      }
      return false
    }
    return false
  }
}
