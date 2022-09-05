import { NodeType } from "../../types";

export function createMockData(): NodeType[]{
	return [
		{
			key: '1',
			title: 'شرکت چارگون',
			children: [
				{
					key: '2',
					title: 'A',
					parentKey: '1'
				},
				{
					key: '3',
					title: 'B',
					parentKey: '1'
				},
			],
			parentKey: null
		}
	]
}