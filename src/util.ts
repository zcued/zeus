export const isNumber = n => typeof n === 'number' && !isNaN(n)

export const px = n => (isNumber(n) ? n + 'px' : n)

export const get = (from, ...selectors) =>
  [...selectors].map(s =>
    s
      .replace(/\[([^\[\]]*)\]/g, '.$1.')
      .split('.')
      .filter(t => t !== '')
      .reduce((prev, cur) => prev && prev[cur], from)
  )

/**
 * get value from props.theme
 * @param path
 */
export const T = (path: string) => (props): any => get(props, `theme.${path}`)
