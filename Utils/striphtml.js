/**
 * Given an HTML string, eturns a string of plain text
 *
 * @param  {Object} html - string of html to strip
 * @return {String} A plain text string
 */
export function striphtml(html) {
  const parsed = new DOMParser().parseFromString(html, 'text/html');

  return parsed.body.textContent || '';
}
