interface ElementOptions{
  attrs?: {[key: string]: any}
  children?: Array<HTMLElement | Text | null>
  content?: string
}
function el<K extends keyof HTMLElementTagNameMap>(tagName: K, options?: ElementOptions){
  const el = document.createElement<K>(tagName)
  if (options){
    if(options.attrs){
      for (let name in options.attrs) {
        if (name && options.attrs.hasOwnProperty(name)) {
          const value = options.attrs[name];
          if (value === true) {
            el.setAttribute(name, name);
          } else if (value !== false && value != null) {
            el.setAttribute(name, value.toString());
          }
        }
      }
    }
    if (options.content) {
      el.innerHTML = options.content
    } else
    if (options.children){
      options.children.forEach(child => {
        if (child){
          el.appendChild(child)
        }
      })
    }
  }
  return el
}
function text(data: string){
  return document.createTextNode(data)
}

export {el, text, ElementOptions}