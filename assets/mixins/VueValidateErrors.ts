export function checkValidateError(data: any): string {
  const error = data.$errors[0]?.$message
  return error
}
export function hasValidateErrors(data: any): boolean {
  const hasErrors = data.$invalid 
  return hasErrors
}