
interface Obj06 {
    a: string;
    b: number;
    c: boolean;
}
// 映射类型: 同态
type ReadonlyObj = Readonly<Obj06>;

let readObj: ReadonlyObj = {
    a: 'ad',
    b: 123,
    c: true
}
console.log(readObj.a);

type PartialObj = Partial<Obj06>;

type PickObj = Pick<Obj06, 'a' | 'b'>
// 映射类型: 非同态
type RecordObj = Record<'x' | 'y', Obj06>;


