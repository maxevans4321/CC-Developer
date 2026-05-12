export async function init(sdk) {
  await sdk.whenReady()

  const slide1 = sdk.$('#slide-1')
  const slide2 = sdk.$('#slide-2')

  function applyProps(props) {
    if (slide1) slide1.textContent = props.message_one || 'Welcome to the Community!'
    if (slide2) slide2.textContent = props.message_two || 'We\'re excited to have you here!'
  }

  applyProps(sdk.getProps())

  sdk.on('propsChanged', (newProps) => {
    applyProps(newProps)
  })

  let current = 1

  function animate() {
    const currentSlide = sdk.$(`#slide-${current}`)
    const nextSlide = sdk.$(`#slide-${current === 1 ? 2 : 1}`)

    currentSlide.classList.remove('active')
    currentSlide.classList.add('exit')

    setTimeout(() => {
      currentSlide.classList.remove('exit')
      nextSlide.classList.add('active')
      current = current === 1 ? 2 : 1
    }, 600)
  }

  setInterval(animate, 3500)
}
