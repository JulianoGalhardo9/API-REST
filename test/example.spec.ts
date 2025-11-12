import { expect, test } from 'vitest'

test('o usuario', () => {
    // Fazer a chamada http
    const responseStatusCode = 201

    // Validação
    expect(responseStatusCode).toEqual(201)
})