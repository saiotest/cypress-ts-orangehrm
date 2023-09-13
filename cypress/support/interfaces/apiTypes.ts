export interface tokenResponse {
	token: string;
}

export interface startResponse {
	server: string;
	task: string;
	remaining_files: number;
}

export interface uploadRequest {
	task: string;
	cloud_file: string;
}
export interface uploadResponse {
	server_filename: string;
}

export interface processRequest {
	task: string;
	tool: string;
	files: filesRequest[];
}

export interface filesRequest {
	server_filename: string; // it's an ID
	filename: string; // it's the name
}

export interface processResponse {
	download_filename: string;
	filesize: number;
	output_filesize: number;
	output_filenumber: number;
	output_extensions: string;
	timer: string;
	status: string; // esto puede ser "TaskSuccess"
}

export enum Tool {
	MERGE = 'merge',
	SPLIT = 'split',
	COMPRESS = 'compress',
	PDFJPG = 'pdfjpg',
	IMAGEPDF = 'imagepdf',
	UNLOCK = 'unlock',
	PAGENUMBER = 'pagenumber',
	WATERMARK = 'watermark',
	OFFICEPDF = 'officepdf',
	REPAIR = 'repair',
	ROTATE = 'rotate',
	PROTECT = 'protect',
	PDFA = 'pdfa',
	VALIDATEPDFA = 'validatepdfa',
	HTMLPDF = 'htmlpdf',
	EXTRACT = 'extract',
}

// Ejemplo de uso:
const selectedTool: Tool = Tool.MERGE;
console.log(selectedTool); // imprimirá "merge"
