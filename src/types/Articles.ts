
export interface Result {
    id:           number;
    title:        string;
    authors:      Author[];
    url:          string;
    image_url:    string;
    news_site:    string;
    summary:      string;
    published_at: Date;
    updated_at:   Date;
    featured:     boolean;
    launches:     Launch[];
    events:       any[];
}

export interface Author {
    name:    string;
    socials: null;
}

export interface Launch {
    launch_id: string;
    provider:  string;
}
