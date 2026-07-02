export function isRequired(value) {
  return value !== null && value !== undefined && String(value).trim() !== ''
}

export function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value).trim())
}

export function isUrl(value) {
  try {
    new URL(value)
    return true
  } catch {
    return false
  }
}
