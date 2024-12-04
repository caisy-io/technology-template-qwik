export interface ISize {
    width: number;
    height: number;
}

export interface ISizes {
    bronze: ISize;
    silver?: ISize;
    gold?: ISize;
    platinum?: ISize;
    diamond?: ISize;
    master?: ISize;
}
export interface IResponseValue<T> {
    bronze: T;
    silver: T;
    gold: T;
    platinum: T;
    diamond: T;
    master: T;
}
export interface IResponseOptionalValue<T> {
    bronze?: T;
    silver?: T;
    gold?: T;
    platinum?: T;
    diamond?: T;
    master?: T;
}
