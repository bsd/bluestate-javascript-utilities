/**
 * Truncates text to desired character length, optinally includes ellipsis and trunactes to wro boundary
 *
 * @param {String} string the string in need of truncating
 * @param {Number} maxLength the length of the desired text string
 * @param {Boolean} useWordBoundary should anything be appeneded to the end? Defaults to true
 * @param {String} ellipsis the string to append, if so; defaults to '...'
 *
 * @return {Boolean} the truncated string
 */
export function truncatetext(string, maxLength, useWordBoundary = true, ellipsis = '...') {
  if (str.length > maxLength) {
    const substring = str.slice(0, maxLength - ellipsis.length);
    return useWordBoundary ? substring.substr(0, substring.lastIndexOf(' ')) + ellipsis : substring + ellipsis;
  }
  return str;
}
