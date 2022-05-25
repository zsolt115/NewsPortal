export interface articleCreationDTO { //data transfer object 
    title: string;
    description: string;
    categoryId: number;
}

export interface articleDTO {
    id: number;
    title: string;
    description: string;
    categoryId: number;
    createdDateTime: string;
}