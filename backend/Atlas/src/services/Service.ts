export interface Service<T> {
    delete(t: T): Promise<any>;
    save(t: T): Promise<any>;
}
