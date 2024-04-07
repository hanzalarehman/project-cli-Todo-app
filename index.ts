#! /usr/bin/env node
import inquirer from 'inquirer'
//todos array
//function
//operation
let todos:string[]=["JHON","MEAVE","OTIS"]
async function makeTodo(todos:string[]){
  let loop:boolean=true
  while(true){ 
  let answer=await inquirer.prompt([{
    name:'select',
    type:'list',
    message:'select an option',
    choices:['ADD','UPDATED','VIEW','DELETED',"EXIT"]
  }])
  
  if(answer.select==='ADD'){
    let addTodo=await inquirer.prompt([{
          name:'todo',
          type:'input',
          message:'add item..'
    }])
    todos.push(addTodo.todo)
    console.log(todos)
  }
  if(answer.select==='UPDATED'){
    let updateTodo=await inquirer.prompt([{
      name:'todo',
      type:'list',
      message:'select the update item..',
      choices:todos.map((item) =>{ return item})
}])
let addTodo=await inquirer.prompt([{
  name:'todo',
  type:'input',
  message:'add item..'
}])
let newTodos=todos.filter(val=>val !== updateTodo.todo)
todos=[...newTodos,addTodo.todo]
console.log(todos)
}
  if(answer.select==='VIEW'){
    console.log(todos)
  }
  if(answer.select==='DELETED'){
    let deleteTodo=await inquirer.prompt([{
      name:'todo',
      type:'list',
      message:'select the deleted item..',
      choices:todos.map((item) =>{ return item})
}])
let newTodos=todos.filter(val=>val !== deleteTodo.todo)
todos=[...newTodos]
console.log(todos)

  }
  if(answer.select==="EXIT"){
    process.exit()

  }
}
}

makeTodo(todos)
