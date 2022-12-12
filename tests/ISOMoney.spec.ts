import { assert } from 'chai'
import { Money as ISOMoney } from '../lib'

describe('ISOMoney', () => {
  it('can construct from positive integer', () => {
    const m = new ISOMoney('XTS', 500)
    assert.strictEqual(m.getAmount(), 500)
    assert.strictEqual(m.getCurrency(), 'XTS')
  })

  it('can construct from negative integer', () => {
    const m = new ISOMoney('XTS', -1900)
    assert.strictEqual(m.getAmount(), -1900)
    assert.strictEqual(m.getCurrency(), 'XTS')
  })

  it('blocks construction from float', () => {
    assert.throws(() => new ISOMoney('XTS', 12.34), TypeError)
  })

  it('blocks construction from string', () => {
    // @ts-expect-error
    assert.throws(() => new ISOMoney('XTS', '12.34'), TypeError)
  })

  it('rejects invalid ISO currency', () => {
    // @ts-expect-error
    assert.throws(() => new ISOMoney('FOO', 1234), RangeError)
  })
})

describe('ISOMoney fromFloat', () => {
  it('can construct from positive float', () => {
    const m = ISOMoney.fromFloat('XTS', 500.40)
    assert.strictEqual(m.getAmount(), 500)
    assert.strictEqual(m.getCurrency(), 'XTS')
  })

  it('can construct from negative float', () => {
    const m = ISOMoney.fromFloat('XTS', -1500.10)
    assert.strictEqual(m.getAmount(), -1500)
    assert.strictEqual(m.getCurrency(), 'XTS')
  })

  it('rounds to currency\'s precision correctly for positive float', () => {
    const m = ISOMoney.fromFloat('USD', 399.8912471293471290)
    assert.strictEqual(m.getAmount(), 39989)
    assert.strictEqual(m.getCurrency(), 'USD')
  })

  it('rounds to currency\'s precision correctly for negative float', () => {
    const m = ISOMoney.fromFloat('USD', -28143.238914829312304)
    assert.strictEqual(m.getAmount(), -2814324)
    assert.strictEqual(m.getCurrency(), 'USD')
  })

  it('rejects non-float valeus', () => {
    assert.throws(() => ISOMoney.fromFloat('XTS', 500), TypeError)
    assert.throws(() => ISOMoney.fromFloat('XTS', 123500), TypeError)
    // @ts-expect-error
    assert.throws(() => ISOMoney.fromFloat('XTS', 'asd'), TypeError)
  })
})

describe('ISOMoney fromString', () => {
  it('can construct from positive integer-string', () => {
    const m = ISOMoney.fromString('XTS', '500')
    assert.strictEqual(m.getAmount(), 500)
    assert.strictEqual(m.getCurrency(), 'XTS')
  })

  it('can construct from negative integer-string', () => {
    const m = ISOMoney.fromString('XTS', '-1500.10')
    assert.strictEqual(m.getAmount(), -1500)
    assert.strictEqual(m.getCurrency(), 'XTS')
  })

  it('can construct from positive float-string', () => {
    const m = ISOMoney.fromString('XTS', '500.40')
    assert.strictEqual(m.getAmount(), 500)
    assert.strictEqual(m.getCurrency(), 'XTS')
  })

  it('can construct from negative float-string', () => {
    const m = ISOMoney.fromString('XTS', '-1992.50')
    assert.strictEqual(m.getAmount(), -1992)
    assert.strictEqual(m.getCurrency(), 'XTS')
  })

  it('rounds to currency\'s precision correctly from positive float-string', () => {
    const m = ISOMoney.fromString('USD', '399.8912471293471290')
    assert.strictEqual(m.getAmount(), 39989)
    assert.strictEqual(m.getCurrency(), 'USD')
  })

  it('rounds to currency\'s precision correctly from negative float-string', () => {
    const m = ISOMoney.fromString('USD', '-399.8912471293471290')
    assert.strictEqual(m.getAmount(), -39989)
    assert.strictEqual(m.getCurrency(), 'USD')
  })

  it('rejects non-string valeus', () => {
    // @ts-expect-error
    assert.throws(() => ISOMoney.fromString('XTS', 500), TypeError)
    // @ts-expect-error
    assert.throws(() => ISOMoney.fromString('XTS', 123500), TypeError)
    // @ts-expect-error
    assert.throws(() => ISOMoney.fromString('XTS', 89.12), TypeError)
    // @ts-expect-error
    assert.throws(() => ISOMoney.fromString('XTS', true), TypeError)
    // @ts-expect-error
    assert.throws(() => ISOMoney.fromString('XTS', {'foo': 'bar'}), TypeError)
  })
})

describe('ISOMoney formatting', () => {
  it('converts to string using default locale (JPY on en-US)', () => {
    const m0 = new ISOMoney('JPY', 1231)
    assert.strictEqual(m0.toLocaleString(), '¥1,231')
  })

  it('converts to string using default locale (USD on en-US)', () => {
    const m0 = new ISOMoney('USD', 17500)
    assert.strictEqual(m0.toLocaleString(), '$175.00')
  })

  it('converts to string using default locale (EUR on en-US)', () => {
    const m0 = new ISOMoney('EUR', 137500)
    assert.strictEqual(m0.toLocaleString(), '€1,375.00')
  })

  it('converts to string using provided locale (JPY on hu-HU)', () => {
    const m0 = new ISOMoney('JPY', 1231)
    assert.strictEqual(m0.toLocaleString('hu-HU'), '1 231 ¥')
  })

  it('converts to string using provided locale (USD on fr-CA)', () => {
    const m0 = new ISOMoney('USD', 17500)
    assert.strictEqual(m0.toLocaleString('fr-CA'), '175,00 $ US')
  })
})
