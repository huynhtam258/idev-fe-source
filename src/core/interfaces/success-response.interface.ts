export interface ISuccessResponse<T> {
    success: boolean,
    message: string,
    statusCode: number,
    data: T
}