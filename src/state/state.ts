let rerenderEntireTree = (state: StateType) => {
  console.log('adf')
}


let state: StateType = {
  profilePage: {
// posts data
    postsData: [
      {id: 1, title: "hey how are you ?"},
      {id: 2, title: "im fine and U ?"},
      {id: 3, title: "ta tozhe"},
    ],
    newPostText: "",
  },
  messagesPage: {
    // messages data
    messagesData: [
      {id: 1, message: "hihihi"},
      {id: 2, message: "yoyoyo"},
      {id: 3, message: "KadabraAbra"},
    ],

// dialogs data
    dialogItemsData: [
      {id: 1, title: "Sasha"},
      {id: 2, title: "Katia"},
      {id: 3, title: "Fox"},
      {id: 4, title: "Nekras"},
    ],
  },
}

export const changePostText = (text: string) => {
  console.log('changePostText')
  state.profilePage.newPostText = text
  rerenderEntireTree(state)
}

export const addPost = () => {
  let newPost = {
    id: 4,
    title: state.profilePage.newPostText
  }
  state.profilePage.postsData.push(newPost)
  state.profilePage.newPostText = ""
  rerenderEntireTree(state)
}

export const subscribe = (observer: (state: StateType) => void) => {
  rerenderEntireTree = observer;
}

//TYPES
// state type
export type StateType = {
  profilePage: ProfilePageType
  messagesPage: {
    messagesData: MessagesDataType
    dialogItemsData: DialogItemsDataType
  }
}
// TYPES
export type ProfilePageType = {
  postsData: PostsDataType
  newPostText: string
}
// messages TYPES
export type MessageType = {
  id: number
  message: string
}
export type MessagesDataType = Array<MessageType>

// dialogs TYPES
export type DialogItemType = {
  id: number
  title: string
}
export type DialogItemsDataType = Array<DialogItemType>

// TYPES
export type PostType = {
  id: number
  title: string
}
export type PostsDataType = Array<PostType>


export default state