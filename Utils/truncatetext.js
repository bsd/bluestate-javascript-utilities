/**
 * Truncates text to desired character length, optinally includes ellipsis and trunactes to wro boundary
 *
 * @param {String} string the string in need of truncating
 *
 * @return {Boolean} the truncated string
 */
export function truncatetext(str, maxLength, { useWordBoundary = true, ellipsis = '...' } = {}) {
  if (str.length > maxLength) {
    const substring = str.slice(0, maxLength - ellipsis.length);
    return useWordBoundary ? substring.substr(0, substring.lastIndexOf(' ')) + ellipsis : substring + ellipsis;
  }
  return str;
}
