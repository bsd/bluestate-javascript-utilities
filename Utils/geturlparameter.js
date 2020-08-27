/**
 * Return value associated with name in url query string
 *
 * @param {String} name of the query parameter
 * @return {String} value of the query parameter
 */
export function geturlparameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp(`[\\?&]${name}=([^&#]*)`);
    const results = regex.exec(window.location.search);
    return results === null
        ? ''
        : decodeURIComponent(results[1].replace(/\+/g, ' '));
}
