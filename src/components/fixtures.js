import React from 'react'

export const stringFixture = 'A string'

export const NodeFixture = (
  <div>A node (string, element, whatever)</div>
)

export const markdownFixture = 'This is **strong**. This is _italic_. This is [a link](https://egghead.io). This is `some code`.'

export const nameFixture = 'Jane'

export const urlFixture = 'https://google.com'

export const imageUrlFixture = 'http://placehold.it/400x300?text=A+image'

export const avatarImageUrlFixture = 'http://placehold.it/500x500?text=A+image'

export const apiFixture = 'https://jsonplaceholder.typicode.com/photos'

export const eventHandlerFixture = () => {
  alert('Event handler was called')
}
