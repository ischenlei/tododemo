<template>
  <div id="home">
    <h1>ToDoList</h1>
    <div class="head-input">
      <input v-if="!isEdit.tag" type="text" v-model="newTodo">
      <input v-else type="text" v-model="editTodo">
      <button v-if="!isEdit.tag" @click="addNew">添加</button>
      <button v-show="isEdit.tag" @click="editFinished">修改</button>
      <button v-show="isEdit.tag" @click="editCancel">取消</button>
    </div>
    <ul>
      <li v-for="(item,index) in allTodo" :key="index" :class="item.isFinished === true ? 'finished' : 'unfinished'">
        <div class="item-content">
          {{ item.content }}
        </div>
        <button v-if="!item.isFinished" @click="finished(index)">完成</button>
        <button v-else @click="cancel(index)">取消完成</button>
        <button @click="edit(index)">编辑</button>
        <button @click="remove(index)">删除</button>
      </li>
    </ul>

  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      allTodo :[],
      newTodo : '',
      isEdit: {tag: false, index: ''},
      editTodo: ''
    }
  },
  mounted() {
    console.log(this.allTodo)
    // localStorage.clear();
    if (localStorage.getItem("allTodo") !== null) {
      this.allTodo = JSON.parse(localStorage.getItem('allTodo'))
    }
  },
  // watch: {
  //   allTodo: {
  //     handler:function(data){
  //       console.log(data)
  //       localStorage.setItem('allTodo', JSON.stringify(data))
  //     },
  //     deep:true
  //   }
  // },
  methods: {
    addNew() {
      if (this.newTodo) {
        this.allTodo.push({
          content: this.newTodo,
          isFinished: false
        })
      }
      this.newTodo = ''
      this.local()
    },
    cancel(e) {  //取消完成
      this.allTodo[e].isFinished = false
      this.local()
    },
    remove(e) {
      let r = confirm("确定要删除吗")
      if (r === true)
        this.allTodo.splice(e, 1)
      this.local()
    },
    finished(e) {
      this.allTodo[e].isFinished = true
      console.log(this.allTodo)
      this.local()
    },
    edit(e) {
      console.log(e)
      this.isEdit.index = e
      this.isEdit.tag = true
      this.editTodo = this.allTodo[this.isEdit.index].content
      console.log(this.editTodo)
    },
    editFinished() {
      this.allTodo[this.isEdit.index].content = this.editTodo
      this.isEdit.tag = false
      this.isEdit.index = ''
      this.editTodo = ''
      this.local()
    },
    editCancel() {  //取消修改
      this.isEdit.tag = false
      this.isEdit.index = ''
      this.editTodo = ''
    },
    local() {  //存储到本地
      localStorage.setItem('allTodo', JSON.stringify(this.allTodo))
    },
    toHome() {  //跳转到home
      this.$router.push('/home')
    }
  },


}
</script>

<style>
#app {

}
.head-input {
  width: 300px;

}
.unfinished {
  text-decoration: none;
}
.finished {
  text-decoration: line-through;
}
.item-content {
  display: inline-block;
  margin-right: 10px;
  width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
button {
  margin-right: 10px;
}
input {
  margin-right: 10px;
}
</style>