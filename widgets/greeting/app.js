export async function init(sdk) {
  await sdk.whenReady()

  const title = sdk.$('.title')
  const subtitle = sdk.$('.subtitle')
  const card = sdk.$('.greeting-card')

  function applyProps(props) {
    if (title) title.textContent = props.greeting_title || 'Hello, Community!'
    if (subtitle) subtitle.textContent = props.greeting_subtitle || 'This is your first custom widget.'
    if (card) card.style.background = props.card_background || ''
  }

  applyProps(sdk.getProps())

  sdk.on('propsChanged', (newProps) => {
    applyProps(newProps)
  })
}
