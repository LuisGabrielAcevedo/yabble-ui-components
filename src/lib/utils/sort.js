export const sortTableData = (sortedData, field, down) =>
  sortedData.sort(function (a, b) {
    const fielda =
      a[field] && typeof a[field] === 'string'
        ? a[field].toLowerCase()
        : a[field]
    const fieldb =
      b[field] && typeof b[field] === 'string'
        ? b[field].toLowerCase()
        : b[field]
    if (fielda > fieldb) return !down ? 1 : -1
    if (fieldb > fielda) return !down ? -1 : 1
    return 0
  })
