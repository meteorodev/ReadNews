export class News {
    private _title: string;
    
    private _source: string;
    
    constructor(title:string,source:string,url:string){
        this.title=title;
        this.source=source;
        this.url=url;
    }
    public get title(): string {
        return this._title;
    }
    public set title(value: string) {
        this._title = value;
    }
    public get source(): string {
        return this._source;
    }
    public set source(value: string) {
        this._source = value;
    }
    private _url: string;
    public get url(): string {
        return this._url;
    }
    public set url(value: string) {
        this._url = value;
    }
}

export class NewsItems{
    private _title_1: string;
    public get title(): string {
        return this._title_1;
    }
    public set title(value: string) {
        this._title_1 = value;
    }
    private _description: string;
    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }
    private _link: string;
    public get link(): string {
        return this._link;
    }
    public set link(value: string) {
        this._link = value;
    }
    constructor(title:string,description:string,link:string){
        this.title=title;
        this.description=description;
        this.link=link;
    }
}