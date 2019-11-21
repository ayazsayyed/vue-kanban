import Vue from "vue"
const uuidv1 = require('uuid/v1');
import {Bus} from './../utils/bus';
import moment from "moment";
import { db } from './../utils/db'

// Lib to create guid
const s4 = () =>
  Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1)
const guid = () => s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + s4() + s4()

export default {
  // Set Initial Data
  SET_INITIAL_DATA(state, payload) {
    console.log('payload ', payload )
    state.boards = payload
  },

  // Set Loading State
  SET_LOADING_STATE(state, payload) {
    state.isLoading = payload
  },

  // Save Task Board
  SAVE_TASKBOARD(state, payload) {
    const board = state.boards.find(b => b.id == payload.id)
    console.log('board ', board);
    const itemIdx = state.boards.findIndex(b => b.id == payload.id)

    // For existing item
    if (itemIdx > -1) {
      board.name = payload.name
      board.description = payload.description
      Vue.set(state.boards, itemIdx, board)
      console.log('this.$firebaseRefs ', this.$firebaseRefs)
      // this.$firebaseRefs.user.update({ lastName: newLastName }).then(() => {
      //   console.log('this.$firebaseRefs ', this.$firebaseRefs)
      // })
    }
    // For new item
    else {
      const board = {
        id: uuidv1(),
        name: payload.name,
        description: payload.description,
        createdAt: moment().format("DD MM YY"),
        archived: false,
        lists: []
      }
      // state.boards.push(board)
      db.ref('projetcs').push(board)
      Bus.$emit('closePopup')
    }
  },

  // Archive Task Board
  ARCHIVE_TASKBOARD(state, payload) {
    const board = state.boards.find(b => b.id == payload.boardId)
    const boardIdx = state.boards.findIndex(b => b.id == payload.boardId)
    board.archived = true
    Vue.set(state.boards, boardIdx, board)
  },

  // Restore Task Board
  RESTORE_TASKBOARD(state, payload) {
    const board = state.boards.find(b => b.id == payload.boardId)
    const boardIdx = state.boards.findIndex(b => b.id == payload.boardId)
    board.archived = false
    Vue.set(state.boards, boardIdx, board)
  },

  // Save Task List
  SAVE_TASKLIST(state, payload) {
    const board = state.boards.find(b => b.id == payload.boardId);
    console.log('board ', board);
    // const list = board.lists.find(l => l.id == payload.listId)
    let listIdx 
    if(board.lists){
      listIdx = board.lists.findIndex(l => l.id == payload.boardId)
    }else{
      board.lists = [];
      listIdx = board.lists.findIndex(l => l.id == payload.boardId)
    }
    // For existing item
    if (listIdx > -1) {
      list.name = payload.name
      Vue.set(board.lists, listIdx, list)
    }
    // // For new item
    else {
      const list = {
        id: uuidv1(),
        name: payload.name,
        headerColor: "#607d8b",
        archived: false,
        items: []
      }
      board.lists.push(list)
    }
    Bus.$emit('closePopup')
  },

  // Archive Task List
  ARCHIVE_TASKLIST(state, payload) {
    const board = state.boards.find(b => b.id == payload.boardId)
    const list = board.lists.find(l => l.id == payload.listId)
    const listIdx = board.lists.findIndex(l => l.id == payload.listId)
    list.archived = true
    Vue.set(board.lists, listIdx, list)
  },

  // Restore Task List
  RESTORE_TASKLIST(state, payload) {
    const board = state.boards.find(b => b.id == payload.boardId)
    const list = board.lists.find(l => l.id == payload.listId)
    const listIdx = board.lists.findIndex(l => l.id == payload.listId)
    list.archived = false
    Vue.set(board.lists, listIdx, list)
  },

  // Reorder TaskBoad Lists
  REORDER_TASKLISTS(state, payload) {
    const board = state.boards.find(b => b.id == payload.boardId)
    Vue.set(board, "lists", payload.lists)
  },

  // Reorder Task List Items
  REORDER_TASKLIST_ITEMS(state, payload) {
    const board = state.boards.find(b => b.id == payload.boardId)
    const listIdx = board.lists.findIndex(l => l.id == payload.listId)
    Vue.set(board.lists[listIdx], "items", payload.items)
  },

  // Set Active Board
  SET_ACTIVE_TASKBOARD(state, payload) {
    state.activeBoard = payload.board
  },

  // Save Task List Item
  SAVE_TASKLIST_ITEM(state, payload) {
    console.log('payload ', payload)
    const board = state.boards.find(b => b.id == payload.boardId)
    const list = board.lists.find(l => l.id == payload.listId)
    const itemIdx = list.items.findIndex(item => item.id == payload.item.id)

    // For existing item
    if (itemIdx > -1) {
      Vue.set(list.items, itemIdx, payload.item)
    }
    // For new item
    else {
      
      payload.item.id = guid()
      list.items.push(payload.item)
    }
  },

  // Delete Task List Item
  DELETE_TASKLIST_ITEM(state, payload) {
    const board = state.boards.find(b => b.id == payload.boardId)
    const list = board.lists.find(l => l.id == payload.listId)
    const itemIdx = list.items.findIndex(item => item.id == payload.item.id)
    // For existing item
    if (itemIdx > -1) {
      Vue.delete(list.items, itemIdx)
    }
  },
  // Delete Task List
  DELETE_TASKLIST(state, payload) {
    console.log(payload);
    
    const board = state.boards.find(b => b.id == payload.boardId)
    const list = board.lists.find(l => l.id == payload.listId)
    console.log('lists ', list);
    
     const itemIdx = board.lists.findIndex(item => item.id == payload.listId)
    // For existing item
    if (itemIdx > -1) {
      Vue.delete(board.lists, itemIdx)
    }
  }
}
