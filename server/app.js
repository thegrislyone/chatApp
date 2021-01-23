const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

const constructUserObject = (name, text, id) => ({name, text, id})
const constructUserObjectWithDate = (name, text, id, time) => ({name, text, id, time})

const dateFormatting = function() {
  const d = new Date(),
  
        hours = (String(d.getHours()).length == 1) ? ('0' + String(d.getHours())) : (String(d.getHours())),
        minutes = (String(d.getMinutes()).length == 1) ? ('0' + String(d.getMinutes())) : (String(d.getMinutes()))
        
  return `${hours}:${minutes}`
}

let users = []

const addUser = (user) => {
  users.push(user)
}

const getUser = (id) => {
  return users.find(user => user.id === id)
}

const removeUser = (id) => {
  const user = getUser(id)

  if(user) {
    users = users.filter(user => user.id !== id)
  }
  
  return user
}

const getUsersByRoom = (room) => {
  return users.filter(user => user.room === room)
}

io.on('connection', socket => {
  socket.on('userJoined', (data, cb) => {
    if (!data.name || !data.room) {
      return cb('Данные некорректны')
    }
    socket.join(data.room)

    removeUser(socket.id)
    addUser({
      id: socket.id,
      name: data.name,
      room: data.room
    })

    cb({userId: socket.id})

    io.to(data.room).emit('updateUsers', getUsersByRoom(data.room))

    socket.broadcast
      .to(data.room)
      .emit('newMessage', constructUserObject('admin', `Пользователь ${data.name} присоединился к чату.`))
  })
    
    socket.on('createMessage', (data, cb) => {
      if (!data.text) {
        return cb('Текст не должен быть пустым')
      }

      const user = getUser(data.id)
      if (user) {
        io.to(user.room).emit('newMessage', constructUserObjectWithDate( user.name, data.text, data.id, dateFormatting() ))
      }
      cb()
    })

    socket.on('userLeft', (id, cb) => {
      const user = removeUser(id)
      if (user) {
        io.to(user.room).emit('updateUsers', users.getByRoom(user.room))
        io.to(user.room).emit('newMessage', constructUserObject('admin', `Пользователь ${user.name} вышел`))
      }
      cb()
    })

    socket.on('disconnect', () => {
      const user = removeUser(socket.id)
      if (user) {
        io.to(user.room).emit('updateUsers', getUsersByRoom(user.room))
        io.to(user.room).emit('newMessage', constructUserObject('admin', `Пользователь ${user.name} вышел`))
      }
    })

})

module.exports = {
  app, server
}
