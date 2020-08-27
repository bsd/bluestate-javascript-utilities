/**
 * Return value associated with name in url query string
 *
 * @param {String} selector the selector you're looking for
 * @return {String} element The closest element
 */
export function geturlparameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp(`[\\?&]${name}=([^&#]*)`);
    const results = regex.exec(window.location.search);
    return results === null
        ? ''
        : decodeURIComponent(results[1].replace(/\+/g, ' '));
}
