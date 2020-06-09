export abstract class Mapper<T, U> {
    public abstract toDTO (t: T): U;
    public abstract toPersistence (u: U): T;
}
