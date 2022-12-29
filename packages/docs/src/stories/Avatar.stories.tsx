import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@y2krock/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://avatars.githubusercontent.com/u/24683775?v=4',
    alt: 'usuário',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: 'undefined',
  },
}
