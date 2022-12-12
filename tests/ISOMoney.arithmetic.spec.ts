import { assert } from 'chai'
import { Money as ISOMoney } from '../lib'

describe('Arithmetic', () => {
  it('sum two objects correctly', () => {
    const m0 = new ISOMoney('USD', 19999)
    const m1 = new ISOMoney('USD', 5000)
    assert.strictEqual(m0.add(m1).getAmount(), 24999)
  })

  it('sum multiple objects correctly', () => {
    const m0 = new ISOMoney('EUR', 19999)
    const m1 = new ISOMoney('EUR', 5000)
    const m2 = new ISOMoney('EUR', 55000)
    const m3 = new ISOMoney('EUR', 18900)
    assert.strictEqual(m0.add(m1, m2, m3).getAmount(), 98899)
    assert.strictEqual(m1.add(m0, m2, m3).getAmount(), 98899)
    assert.strictEqual(m2.add(m1, m0, m3).getAmount(), 98899)
    assert.strictEqual(m2.add(m2, m2, m2).getAmount(), 220000)
  })

  it('forbids adding different currencies', () => {
    const m0 = new ISOMoney('USD', 1)
    const m1 = new ISOMoney('EUR', 2)
    assert.throws(() => m0.add(m1), RangeError)
  })

  it('subtracts two objects correctly', () => {
    const m0 = new ISOMoney('USD', 300)
    const m1 = new ISOMoney('USD', 100)
    assert.strictEqual(m0.subtract(m1).getAmount(), 200)
  })

  it('subtracts multiple objects correctly', () => {
    const m0 = new ISOMoney('USD', 500)
    const m1 = new ISOMoney('USD', 80)
    const m2 = new ISOMoney('USD', 50)
    const m3 = new ISOMoney('USD', 20)
    assert.strictEqual(m0.subtract(m1, m2, m3).getAmount(), 350)
    assert.strictEqual(m1.subtract(m0, m2, m3).getAmount(), -490)
    assert.strictEqual(m2.subtract(m1, m0, m3).getAmount(), -550)
    assert.strictEqual(m2.subtract(m2, m2, m2).getAmount(), -100)
  })

  it('forbids subtracting different currencies', () => {
    const m0 = new ISOMoney('USD', 1)
    const m1 = new ISOMoney('EUR', 2)
    assert.throws(() => m0.subtract(m1), RangeError)
  })

  it('multiplies correctly', () => {
    const m0 = new ISOMoney('USD', 300)
    assert.strictEqual(m0.multiply(3).getAmount(), 900)
    const m1 = new ISOMoney('USD', 999)
    assert.strictEqual(m1.multiply(1.32312).getAmount(), 1322)
  })

  it('divides correctly', () => {
    const m0 = new ISOMoney('USD', 1000)
    assert.strictEqual(m0.divide(5).getAmount(), 200)
    const m1 = new ISOMoney('USD', 2000)
    assert.strictEqual(m1.divide(3.45).getAmount(), 580)
  })
})
