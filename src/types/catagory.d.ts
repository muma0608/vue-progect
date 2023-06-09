// 定义类型
export type TResult = {
    code: string
    msg: string
    result: TCate[]
}
// 定义一个通用的返回数据类型
export type TRes<T> = {
    code: string
    msg: string
    result: T
}
// 定义一个分类的类型
export type TCate = {
    id: string
    name: string
    open: boolean
}
export type TSwiper = { 
    id: string
    img: string

}