export default {
  'Iron Ore': {
    name: 'Iron Ore',
    raw: true,
    img: 'https://dsp-wiki.com/images/f/fc/Icon_Iron_Ore.png',
    type: 'Mining Machine',
  },
  'Copper Ore': {
    name: 'Copper Ore',
    raw: true,
    img: 'https://dsp-wiki.com/images/9/90/Icon_Copper_Ore.png',
    type: 'Mining Machine',
  },
  'Stone Ore': {
    name: 'Stone Ore',
    raw: true,
    img: 'https://dsp-wiki.com/images/2/2b/Icon_Stone_Ore.png',
    type: 'Mining Machine',
  },
  'Coal Ore': {
    name: 'Coal Ore',
    raw: true,
    img: 'https://dsp-wiki.com/images/f/f3/Icon_Coal_Ore.png',
    type: 'Mining Machine',
  },
  'Silicon Ore': {
    name: 'Silicon Ore',
    raw: true,
    img: 'https://dsp-wiki.com/images/d/d4/Icon_Silicon_Ore.png',
    type: 'Mining Machine',
  },
  'Titanium Ore': {
    name: 'Titanium Ore',
    raw: true,
    img: 'https://dsp-wiki.com/images/9/91/Icon_Titanium_Ore.png',
    type: 'Mining Machine',
  },
  'Iron Ingot': {
    name: 'Iron Ingot',
    amount: 1,
    speed: 1,
    type: 'Smelter',
    img: 'https://dsp-wiki.com/images/f/f1/Icon_Iron_Ingot.png',
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
    img: 'https://dsp-wiki.com/images/e/ec/Icon_Copper_Ingot.png',
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
    img: 'https://dsp-wiki.com/images/1/11/Icon_Energetic_Graphite.png',
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
    img: 'https://dsp-wiki.com/images/5/5a/Icon_Stone.png',
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
    img: 'https://dsp-wiki.com/images/f/f1/Icon_Titanium_Ingot.png',
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
    img: 'https://dsp-wiki.com/images/c/c6/Icon_Magnet.png',
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
    img: 'https://dsp-wiki.com/images/7/76/Icon_Glass.png',
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
    img: 'https://dsp-wiki.com/images/3/38/Icon_Steel.png',
    children: [
      {
        name: 'Iron Ingot',
        amount: 3,
      },
    ],
  },
  'Circuit Board': {
    name: 'Circuit Board',
    amount: 2,
    speed: 1,
    type: 'Smelter',
    img: 'https://dsp-wiki.com/images/2/2f/Icon_Circuit_Board.png',
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
    img: 'https://dsp-wiki.com/images/e/e5/Icon_Magnetic_Coil.png',
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
    img: 'https://dsp-wiki.com/images/8/8a/Icon_High-Purity_Silicon.png',
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
    img: 'https://dsp-wiki.com/images/8/8a/Icon_High-Purity_Silicon.png',
    children: [
      {
        name: 'Stone Ore',
        amount: 10,
      },
    ],
  },
}
