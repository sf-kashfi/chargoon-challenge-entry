export interface NodeType {
	title: string;
	key: string;
	children?: NodeType[];
	parentKey?: string;
	data?: any[];
}