import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tasks: [],
}

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask(state, { payload }) {
      state.tasks.push(payload)
    },
    updateTask(state, { payload }) {
      state.tasks.find((task) => {
        if (task._id === payload._id) {
          return Object.assign(task, payload)
        }
      })
    },
    deleteTask(state, { payload }) {
      state.tasks = state.tasks.filter((task) => {
        return task._id !== payload
      })
    },
    initTasks(state, { payload }) {
      state.tasks = payload
    },
  },
})

export const taskReducers = taskSlice.reducer
export default taskSlice.actions
