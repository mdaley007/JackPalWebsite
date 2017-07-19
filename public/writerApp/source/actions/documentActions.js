// import modules

export function addSerialProject(id, text) {
  return {
    type: 'ADD_TWEET',
    payload: {
      id,
      text,
    },
  }
}

export function addOneOffProject(id, text) {
  return {
    type: 'UPDATE_TWEET',
    payload: {
      id,
      text,
    },
  }
}

export function deleteProject(id) {
  return { type: 'DELETE_TWEET', payload: id}
}
