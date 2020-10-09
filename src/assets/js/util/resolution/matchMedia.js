export default class ContactInformation {
  get isMobile() {
    const resolutionOfTablet = window.matchMedia('screen and (max-width: 768px)')
    if (resolutionOfTablet.matches) {
      return true
    }
    return false
  }
}
