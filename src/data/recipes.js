import { v4 as uuidv4 } from 'uuid'
import recipes from './recipe_list_v1'

export default class {
  constructor (name) {
    this.name = name
    this.tree = []
    this.totals = {}
  }

  list () {
    return Object.keys(recipes).filter(x => x !== '_version')
  }

  build (units) {
    const obj = {
      root: null,
    }
    this._generate(units, obj, this.name)
    return obj
  }

  // units = items/min
  _generate (units, obj, name, node) {
    const recipe = recipes[name]
    // if recipe not found, then it's a raw resource... unless something really went wrong....
    if (!recipe) {
      if (name in obj.root.raw) {
        obj.root.raw[name] += parseFloat(units)
      } else {
        obj.root.raw[name] = parseFloat(units)
      }

      return
    }

    const { speed, amount, type, children } = recipe
    if (!node) {
      obj.root = {
        name,
        id: uuidv4(),
        amount: units,
        raw: {},
        children: [],
      }
      node = obj.root
    } else {
      node.children.push({
        name,
        amount: units,
        children: [],
      })
    }
    for (const child of children) {
      const factor = units / (amount * speed)
      this._generate(child.amount * factor, obj, child.name, node)
    }
  }
}
