import * as classNames from "classnames"

import { Values } from "../islands/ory-flow.tsx"

export const cn = classNames.default

/**
 * When adding class to an element, say: `<div class={x} />` and `x`'s value ends up being an empty string (`''`), the element will render `<div class />` and end up with tons of empty `class` attributes. This function simplifies the code that replaces parts that end up having an empty string and makes them have `undefined` value.
 *
 * @param {Record<string, string>}
 *  The record of parts that might contain empty string values.
 *
 * @returns {Record<string, string | undefined>}
 *  A new record of the same parts but an `undefined` value replaced empty string values.
 */
export const partializeClasses = (classes: Record<string, string>): Record<string, string | undefined> =>
  rMap<string | undefined>(classes, (entry) => (entry === "" ? undefined : entry))

/**
 * This function emulates the behavior of `Array.prototype.map()` in Records. It calls a function
 * passing each entry of the record as an argument.
 *
 * @param {Record<T>} record
 *  The record to be mapped.
 *
 * @param {function} callback
 *  The function that will map the entries of the record.
 *
 * @returns {Record<T>}
 *  A new cord with each entry mapped to the function.
 */
export function rMap<T>(record: Record<string, T>, callback: (entry: T, key?: string) => T): Record<string, T> {
  const newRecord: Record<string, T> | Record<string | number | symbol, never> = {}
  Object.keys(record).forEach((key) => {
    newRecord[key] = callback(record[key], key)
  })
  return newRecord
}

export const hexToRgbA = (hex?: string, _opacity = 1): string | undefined | null => {
  if (!hex) return null
  let c: any
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split("")
    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]]
    }
    c = "0x" + c.join("")
    return "rgba(" + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") + ", " + _opacity + ")"
  }
  return null
  // throw new Error("Bad Hex")
}

const queryString = {
  parse: (str: string) => {
    const res: Record<string, any> = {}
    str.split("&").forEach((item) => {
      const [key, value] = item.split("=")
      res[key] = value
    })
    return res
  },
}

export const parseURLQuery = (search: string, location?: Record<string, any>): string | string[] => {
  // Use @reach/router to retrieve the `query` (?query=123) from the client's URL.
  // Parse out `flow`, which is used to verify the client has actually started the flow.
  const params = queryString.parse((location && location.search) || "")
  const result = params[search] as string | string[]
  return result
}

export const parseURLQueryAsObject = (search: string): Record<string, any> => {
  const params = queryString.parse(search)
  return params
}
