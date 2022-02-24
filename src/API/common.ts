export interface BatchResult<R> {
    values: R[],
    errors: any[]
}

/**
 * Batch async requests
 *
 * @param batch list of elements to process
 * @param request any function that accepts value and returns {@link Promise}
 */
export async function batchRequest<T, R = any>(
    batch: T[],
    request: ((data: T) => Promise<R>)
): Promise<BatchResult<R>> {
    let values: R[] = []
    let errors: any[] = []

    const results = await Promise.all(
        batch.map(data =>
            request(data)
                .then(value => ({value}))
                .catch(error => ({error}))
        )
    )

    results.forEach(result => 'error' in result
        ? errors.push(result.error)
        : values.push(result.value)
    )

    return {values, errors}
}