import { getAccessorType } from 'typed-vuex'
import * as mediaStack from '~/store/mediaStack'

export const state = () => ({
  test: 1,
})

export const accessorType = getAccessorType({
  state,
  modules: {
    mediaStack,
  },
})
