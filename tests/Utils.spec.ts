import { assert } from 'chai'
import {
  all,
  allMoney,
  isFloat,
  assertIdenticalCurrencies,
  assertAllMoney,
  assertSupportedISOCurrency,
  assertValidMonies,
} from '../lib'
import { Money as ISOMoney } from '../lib'

describe('Utils', () => {
  it('all() is true when all input is the same', () => {
    assert.isTrue(all<string>('a', 'a', 'a'))
  })

  it('all() is false when one input is different', () => {
    assert.isFalse(all<string>('b', 'a', 'a'))
  })

  it('allMoney() is true when all input is money', () => {
    const m0 = new ISOMoney('XTS', 123)
    const m1 = new ISOMoney('USD', 456)
    assert.isTrue(allMoney(m0, m1))
  })

  it('allMoney() is false when one input is NOT money', () => {
    const m0 = new ISOMoney('XTS', 123)
    const m1 = new ISOMoney('USD', 456)
    assert.isFalse(allMoney(m0, m1, 'foo'))
  })

  it('isFloat() correctly detects floats', () => {
    assert.isTrue(isFloat(123.45))
    assert.isTrue(isFloat(-22.49))
    assert.isFalse(isFloat('129.43'))
    assert.isFalse(isFloat('-22.49'))
    assert.isFalse(isFloat('blah'))
    assert.isFalse(isFloat(true))
    assert.isFalse(isFloat({ foo: true }))
    assert.isFalse(isFloat(12345))
    assert.isFalse(isFloat(-6789))
  })

  it('assertIdenticalCurrencies() does not throw when all currency is same', () => {
    const m0 = new ISOMoney('USD', 456)
    const m1 = new ISOMoney('USD', 111)
    // no-op
    assertIdenticalCurrencies(m0.getCurrency(), m1.getCurrency())
  })

  it('assertIdenticalCurrencies() throws when one currency is different', () => {
    const m0 = new ISOMoney('USD', 456)
    const m1 = new ISOMoney('XTS', 111)
    assert.throws(
      () => assertIdenticalCurrencies(m0.getCurrency(), m1.getCurrency()),
      RangeError,
    )
  })

  it('assertAllMoney() throws when one is NOT money', () => {
    const m0 = new ISOMoney('XTS', 123)
    assert.throws(() => assertAllMoney(m0, 'foo'), TypeError)
    assert.throws(() => assertAllMoney(m0, 123), TypeError)
    assert.throws(() => assertAllMoney(m0, true), TypeError)
    assert.throws(() => assertAllMoney(m0, 34.1), TypeError)
    assert.throws(() => assertAllMoney(m0, { foo: 'bar' }), TypeError)
  })

  it('assertAllMoney() does not throw when all is money', () => {
    const m0 = new ISOMoney('XTS', 123)
    const m1 = new ISOMoney('USD', 456)
    const m2 = new ISOMoney('EUR', 789)
    // no-op
    assertAllMoney(m0, m1, m2)
  })

  it('assertSupportedISOCurrency() throws when ISO currency does not exist', () => {
    // @ts-expect-error
    assert.throws(() => assertSupportedISOCurrency('FOO'), RangeError)
  })

  it('assertSupportedISOCurrency() does not throw when ISO currency exists', () => {
    // no-op
    // @ts-expect-error
    ;['USD', 'GBP', 'EUR', 'JPY'].map((c) => assertSupportedISOCurrency(c))
  })

  it('assertValidMonies() does not throw when all is valid', () => {
    const m0 = new ISOMoney('USD', 456)
    const m1 = new ISOMoney('USD', 111)
    // no-op
    assertValidMonies(m0, m1)
  })

  it('assertValidMonies() throws on different currencies', () => {
    const m0 = new ISOMoney('USD', 456)
    const m1 = new ISOMoney('XTS', 111)
    assert.throws(() => assertValidMonies(m0, m1), RangeError)
  })

  it('assertValidMonies() throws on not money', () => {
    const m0 = new ISOMoney('USD', 456)
    // @ts-expect-error
    assert.throws(() => assertValidMonies(m0, 'foo'), TypeError)
    // @ts-expect-error
    assert.throws(() => assertValidMonies(m0, 123), TypeError)
    // @ts-expect-error
    assert.throws(() => assertValidMonies(m0, true), TypeError)
    // @ts-expect-error
    assert.throws(() => assertValidMonies(m0, 34.1), TypeError)
    // @ts-expect-error
    assert.throws(() => assertValidMonies(m0, { foo: 'bar' }), TypeError)
  })
})
