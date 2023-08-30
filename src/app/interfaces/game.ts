import { Genre } from './genre';
import { ParentPlatform } from './parent-platform';
import { Publishers } from './publishers';
import { Rating } from './rating';
import { Screenshots } from './screenshots';
import { Trailer } from './trailer';

export interface Game {
    background_image?: string;
    name: string;
    released: string;
    metacritic_url: string;
    website?: string;
    description: string;
    metacritic: number;
    tba: boolean;
    id: string;
    slug: string;
    genres: Array<Genre>;
    parent_platforms: Array<ParentPlatform>;
    publishers: Array<Publishers>;
    ratings: Array<Rating>;
    screenshots?: Array<Screenshots>;
    trailers?: Array<Trailer>;
}
