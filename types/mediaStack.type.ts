import {
  ActionContext,
  Store as VuexStore,
  CommitOptions,
  DispatchOptions,
} from 'vuex'
export interface News {
  author?: string
  title: string
  description: string
  url: string
  source: string
  image?: string
  category: string
  language: string
  country: string
  published_at: string
}

interface Pagination {
  count: number
  limit: number
  offset: number
  total: number
}

export interface MediaStackResponse<T> {
  data: T
  pagination: Pagination
}

interface IState {
  news?: News[] | [] | null
}

export type Mutations<S = IState> = {
  setNews(state: S, payload?: News[]): void
}

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>
} & Omit<ActionContext<IState, IState>, 'commit'>

export interface Actions {
  GET_ALL_NEWS(
    { commit }: AugmentedActionContext,
    payload: number
  ): Promise<News[]>
}

export type Store = Omit<
  VuexStore<IState>,
  'getters' | 'commit' | 'dispatch'
> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>
} & {
  dispatch<K extends keyof Actions>(
    key: K,
    payload: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>
}
