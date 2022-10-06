import { NodeType } from "../../types";

export function createTreeMockData(): NodeType[] {
	return [
		{
			key: '1',
			title: 'شرکت چارگون',
			children: [
				{
					key: '2',
					title: 'یاور کاردوست(مدیرعامل)',
					parentKey: '1',
					hierarchy: ['1', '2'],
					children: [
						{
							key: '3',
							title: 'محسن پاکدل(مدیرفنی)',
							parentKey: '2',
							hierarchy: ['1', '2', '3'],
							children: [
								{
									key: '4',
									title: 'علیرضا گلزاده(کارشناس رابط کاربری)',
									parentKey: '3',
									hierarchy: ['1', '2', '3', '4'],
									children: [
		
									]
								}
							]
						}
					]
				}
			],
			parentKey: null,
			hierarchy: []
		}
	]
}