/**
 * 参数拼接
 * @param {object} object
 * @returns {string}
 */
export const combineUrlParams = (object: object = {}): string => {
	return Object.entries(object) // 生成二维数组
	.filter((arr: any[]) => ![undefined, null, NaN].includes(arr[1])) // 过滤假值
	.map((arr: any[]) => arr.join('=')) // 拼接参数，转为一维数组
	.join('&'); // 转为字符串
};

/**
 * 合并className函数
 * @param {string | undefined} args
 * @returns {string}
 */
export const combineClass = (...args: Array<string | undefined>): string => {
	return args.filter(Boolean).join(' ');
};

/**
 * 过滤指定的值
 * @param object
 * @param array
 */
export const filterSomeValue = (object: { [propName: string]: any }, array: any[]): object => {
	return JSON.parse(
		JSON.stringify(object, (k: string, v: any) => {
			if (array.includes(v)) {
				return undefined;
			}
			return v;
		}),
	);
};

/**
 * 主要为了实现浏览器中获取参数, 获取url中的参数
 * @param {string} name
 * @param {string} urlSearch
 * @returns {string | null}
 */
export const getQueryString = (name: string = '', urlSearch: string = ''): string | null => {
	const reg: string = '(^|&)' + name + '=([^&]*)(&|$)';
	const r: RegExpMatchArray | null = urlSearch.substr(1).match(reg);
	if (r !== null) {
		return unescape(r[2]);
	}
	return null;
};
