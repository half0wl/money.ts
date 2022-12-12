import { assert } from 'chai'
import { Money as ISOMoney } from '../lib'

describe('Comparisons', () => {
  it('equals() correct for same money', () => {
    const m0 = new ISOMoney('USD', 5000)
    const m1 = new ISOMoney('USD', 5000)
    assert.isTrue(m0.equals(m1))
    assert.isTrue(m1.equals(m0))
  })

  it('equals() correct for different amount', () => {
    const m0 = new ISOMoney('USD', 19999)
    const m1 = new ISOMoney('USD', 5000)
    assert.isFalse(m0.equals(m1))
    assert.isFalse(m1.equals(m0))
  })

  it('equals() correct for different currencies', () => {
    const m0 = new ISOMoney('USD', 19999)
    const m1 = new ISOMoney('EUR', 19999)
    assert.isFalse(m0.equals(m1))
    assert.isFalse(m1.equals(m0))
  })

  it('equals() correct for different amount and currencies', () => {
    const m0 = new ISOMoney('EUR', 19999)
    const m1 = new ISOMoney('USD', 89000)
    assert.isFalse(m0.equals(m1))
    assert.isFalse(m1.equals(m0))
  })

  it('greaterThan() forbids comparing different currencies', () => {
    const m0 = new ISOMoney('EUR', 19999)
    const m1 = new ISOMoney('USD', 89000)
    assert.throws(() => m0.greaterThan(m1), RangeError)
    assert.throws(() => m1.greaterThan(m0), RangeError)
  })

  it('greaterThan() correct', () => {
    const m0 = new ISOMoney('USD', 19999)
    const m1 = new ISOMoney('USD', 89000)
    assert.isTrue(m1.greaterThan(m0))
  })

  it('greaterThanOrEqual() true for similar amount values', () => {
    const m0 = new ISOMoney('USD', 89000)
    const m1 = new ISOMoney('USD', 89000)
    assert.isTrue(m0.greaterThanOrEqual(m1))
    assert.isTrue(m1.greaterThanOrEqual(m0))
  })

  it('greaterThanOrEqual() forbids comparing different currencies', () => {
    const m0 = new ISOMoney('USD', 19999)
    const m1 = new ISOMoney('EUR', 89000)
    assert.throws(() => m0.greaterThanOrEqual(m1), RangeError)
    assert.throws(() => m1.greaterThanOrEqual(m0), RangeError)
  })

  it('lessThan() forbids comparing different currencies', () => {
    const m0 = new ISOMoney('EUR', 19999)
    const m1 = new ISOMoney('USD', 89000)
    assert.throws(() => m0.lessThan(m1), RangeError)
    assert.throws(() => m1.lessThan(m0), RangeError)
  })

  it('lessThan() correct', () => {
    const m0 = new ISOMoney('USD', 19999)
    const m1 = new ISOMoney('USD', 89000)
    assert.isTrue(m0.lessThan(m1))
  })

  it('lessThanOrEqual() true for similar amount values', () => {
    const m0 = new ISOMoney('USD', 89000)
    const m1 = new ISOMoney('USD', 89000)
    assert.isTrue(m0.lessThanOrEqual(m1))
    assert.isTrue(m1.lessThanOrEqual(m0))
  })

  it('lessThanOrEqual() forbids comparing different currencies', () => {
    const m0 = new ISOMoney('USD', 19999)
    const m1 = new ISOMoney('EUR', 89000)
    assert.throws(() => m0.lessThanOrEqual(m1), RangeError)
    assert.throws(() => m1.lessThanOrEqual(m0), RangeError)
  })
})
