export const state = () => ({
    list: [
        { name: 'bhaskar', age: 27 }
    ]
})

export const mutations = {
    add(state, title) {
        state.list.push(title)
    }
}

export const getters = {
    get(state) {
        return state.list
    }
}