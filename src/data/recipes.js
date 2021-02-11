import { v4 as uuidv4 } from 'uuid'
import recipes from './recipe_list_v1'

export default class {
  static list = Object.keys(recipes)

  static table () {
    var list = Object.values(recipes)
    var temp = []
    while (list.length) { temp.push(list.splice(0, 8)) }
    return temp
  }

  static build (name, units) {
    const root = {
      name,
      units,
      id: uuidv4(),
      children: [],
      raw: {},
    }
    this._generate(root, root.raw)
    return root
  }

  static _generate (node, raw) {
    const recipe = recipes[node.name]

    // if recipe not found, then it's a raw resource...
    // unless something really went wrong....
    if (!recipe.children) {
      raw[node.name] = raw[node.name] || 0
      raw[node.name] += parseFloat(node.units)
      return
    }

    const { speed, amount, children } = recipe
    for (const child of children) {
      const factor = node.units / (amount * speed)
      var newNode = {
        name: child.name,
        units: child.amount * factor,
        children: [],
      }
      node.children.push(newNode)
      this._generate(newNode, raw)
    }
  }
}
