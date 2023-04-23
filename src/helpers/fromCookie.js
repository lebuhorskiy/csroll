import Cookies from 'js-cookie'
export function fromCookie (name) {
    return Cookies.get(name)
}
