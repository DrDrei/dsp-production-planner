export default {
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
  'Energetic Graphite': {
    name: 'Energetic Graphite',
    amount: 1,
    speed: 1,
    type: 'Smelter',
    children: [
      {
        name: 'Coal Ore',
        amount: 1,
      },
    ],
  },
  Stone: {
    name: 'Stone',
    amount: 1,
    speed: 1,
    type: 'Smelter',
    children: [
      {
        name: 'Stone Ore',
        amount: 1,
      },
    ],
  },
  'Titanium Ingot': {
    name: 'Titanium Ingot',
    amount: 1,
    speed: 2,
    type: 'Smelter',
    children: [
      {
        name: 'Titanium Ore',
        amount: 2,
      },
    ],
  },
  Magnet: {
    name: 'Magnet',
    amount: 1,
    speed: 1.5,
    type: 'Smelter',
    children: [
      {
        name: 'Iron Ore',
        amount: 1,
      },
    ],
  },
  Glass: {
    name: 'Glass',
    amount: 1,
    speed: 1.5,
    type: 'Smelter',
    children: [
      {
        name: 'Stone Ore',
        amount: 2,
      },
    ],
  },
  Steel: {
    name: 'Steel',
    amount: 1,
    speed: 3,
    type: 'Smelter',
    children: [
      {
        name: 'Iron Ingot',
        amount: 3,
      },
    ],
  },
  'Circuit Board': {
    name: 'Steel',
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
  'Magnetic Coil': {
    name: 'Magnetic Coil',
    amount: 2,
    speed: 1,
    type: 'Assembler',
    children: [
      {
        name: 'Copper Ingot',
        amount: 1,
      },
      {
        name: 'Magnet',
        amount: 2,
      },
    ],
  },
  'High-purity Silicon (Silicon Ore)': {
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
  'High-purity Silicon (Stone Ore)': {
    name: 'Silicon Ingot',
    amount: 1,
    speed: 10,
    type: 'Smelter',
    children: [
      {
        name: 'Stone Ore',
        amount: 10,
      },
    ],
  },
}
