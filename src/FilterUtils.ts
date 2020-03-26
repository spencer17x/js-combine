/**
 * 过滤方法
 */
import { IObject } from './interface';

export default {
	/**
	 * 过滤指定的值
	 * @param object - 需要过滤的对象
	 * @param array - 过滤指定的值
	 */
	filterSpecifiedValue(object: IObject, array: any[]): object {
		// Object.keys(object).forEach((key: string) => {
		//   if (array.includes(object[key])) {
		//     Reflect.deleteProperty(object, key)
		//   }
		// })
		return JSON.parse(
			JSON.stringify(object, (k: string, v: any) => {
				if (array.includes(v)) {
					return undefined;
				}
				return v;
			}),
		);
	},
};
