export const headerConfig = {
  "Content-Type": "application/json",
  "Authorization": `Bearer ${localStorage.getItem('token')}`,
}