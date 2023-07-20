var metric, imperial

metric = {
  'm/s': {
    name: {
      singular: 'Metre per second',
      plural: 'Metres per second',
    },
    to_anchor: 3.6,
  },
  'km/h': {
    name: {
      singular: 'Kilometre per hour',
      plural: 'Kilometres per hour',
    },
    to_anchor: 1,
  },
  'mm/h': {
    name: {
      singular: 'Millimeter per hour',
      plural: 'Millimeters per hour',
    },
    to_anchor: 0.000001,
  },
}

imperial = {
  mph: {
    name: {
      singular: 'Mile per hour',
      plural: 'Miles per hour',
    },
    to_anchor: 1,
  },
  knot: {
    name: {
      singular: 'Knot',
      plural: 'Knots',
    },
    to_anchor: 1.150779,
  },
  'ft/s': {
    name: {
      singular: 'Foot per second',
      plural: 'Feet per second',
    },
    to_anchor: 0.681818,
  },
  'ft/min': {
    name: {
      singular: 'Foot per minute',
      plural: 'Feet per minute',
    },
    to_anchor: 0.0113636,
  },
  'in/h': {
    name: {
      singular: 'Inch per hour',
      plural: 'Inches per hour',
    },
    to_anchor: 0.00001578,
  },
}

module.exports = {
  metric: metric,
  imperial: imperial,
  _anchors: {
    metric: {
      unit: 'km/h',
      ratio: 1 / 1.609344,
    },
    imperial: {
      unit: 'm/h',
      ratio: 1.609344,
    },
  },
}
