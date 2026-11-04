const links = [...document.querySelectorAll('.toc a')]
const sections = [...document.querySelectorAll('.prose section[id]')]
const byId = new Map(links.map((a) => [a.hash.slice(1), a]))

let current = null

const update = () => {
  const doc = document.documentElement
  const atBottom = window.innerHeight + window.scrollY >= doc.scrollHeight - 2
  const line = window.innerHeight * 0.3

  let active = sections[0]
  if (atBottom) {
    active = sections.at(-1)
  } else {
    for (const s of sections) {
      if (s.getBoundingClientRect().top <= line) active = s
      else break
    }
  }

  if (active === current) return
  current?.id && byId.get(current.id)?.classList.remove('active')
  byId.get(active.id)?.classList.add('active')
  current = active
}

window.addEventListener('scroll', update, { passive: true })
window.addEventListener('resize', update)
update()
