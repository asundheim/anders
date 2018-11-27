import { ILabel } from './ILabel';
export interface IModule {
    name: string;
    labels: ILabel[];
    imageHeight?: number;
    images?: any[];
    image: string;
    tree?: boolean;
    dungeonBoxes?: boolean;
    perlin?: boolean;
    repoLink: string;
    interact?: string;
    toggle?: boolean;
    module?: any;
    imageLink?: string;
    description: string;
}
