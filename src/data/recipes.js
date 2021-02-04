import { v4 as uuidv4 } from 'uuid'

const recipes = {
  _version: '0.6',
  'Iron Ingot': {
    name: 'Iron Ingot',
    amount: 1,
    speed: 1,
    type: 'Smelter',
    children: [
      {
        name: 'Iron Ore',
        amount: 1,
      },
    ],
  },
  'Copper Ingot': {
    name: 'Copper Ingot',
    amount: 1,
    speed: 1,
    type: 'Smelter',
    children: [
      {
        name: 'Copper Ore',
        amount: 1,
      },
    ],
  },
  'Magnetic Coil': {
    name: 'Magnetic Coil',
    amount: 2,
    speed: 1,
    type: 'Smelter',
    children: [
      {
        name: 'Copper Ingot',
        amount: 1,
      },
      {
        name: 'Iron Ingot',
        amount: 2,
      },
    ],
  },
  'High-Purity Silicon (Silicon Ore)': {
    name: 'Silicon Ingot',
    amount: 1,
    speed: 2,
    type: 'Smelter',
    children: [
      {
        name: 'Silicon Ore',
        amount: 2,
      },
    ],
  },
}

export default class {
  constructor (name) {
    this.name = name
    this.tree = []
    this.totals = {}
  }

  list () {
    return Object.values(recipes).filter(x => x && x.name).map(x => x.name)
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
        obj.root.raw[name] += units
      } else {
        obj.root.raw[name] = units
      }

      return
    }

    const { speed, amount, type, children } = recipe
    if (!node) {
      obj.root = {
        name,
        key: uuidv4(),
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
