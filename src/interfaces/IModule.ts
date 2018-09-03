import { ILabel } from './ILabel';
import { IButton } from './IButton';

export interface IModule {
    name: string;
    labels: ILabel[];
    imageHeight?: number;
    buttons?: IButton[];
    images?: any[];
    image: string;
    tree?: boolean;
    dungeonBoxes?: boolean;
    repoLink: string;
    interact?: string;
}
