/**
 * sleep
 *
 * @param {Number} delay
 * @return {Promise}
 */
export function sleep(delay=1000)
{
	return new Promise(function(resolve){
		setTimeout(resolve, delay);
	});
}
