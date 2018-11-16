const socketIo = require('socket.io');

const SOCKET_EVENT_TYPE = {
  JOIN: 'JOIN',
  NOTICE: 'NOTICE',
  SIGNAL: 'SIGNAL',
  IS_CALLER: 'IS_CALLER',
  IS_CALLEE: 'IS_CALLEE',
  CALLEE_JOINS: 'CALLEE_JOINS'
};

function socket(server) {
  const io = socketIo(server);
  
  io.on('connection', socket => {
    socket.on(SOCKET_EVENT_TYPE.NOTICE, ({ type, room, data }) => {
      io.sockets.in(room).emit(SOCKET_EVENT_TYPE.NOTICE, {
        type,
        data
      });
    });
    
    socket.on(SOCKET_EVENT_TYPE.SIGNAL, ({ type, data }) => {
      socket.broadcast.emit(SOCKET_EVENT_TYPE.SIGNAL, { type ,data });
    });
    
    socket.on(SOCKET_EVENT_TYPE.JOIN, function({ room, nickname }) {
      const clientsInRoom = io.sockets.adapter.rooms[room];
      const numClients = clientsInRoom ? Object.keys(clientsInRoom.sockets).length : 0;
      
      if (numClients >= 2) {
        socket.emit(SOCKET_EVENT_TYPE.NOTICE, {
          type: 'FULL'
        });
        return;
      }
      
      socket.join(room);
      io.sockets.in(room).emit(SOCKET_EVENT_TYPE.NOTICE, {
        type: 'JOINED',
        data: {
          nickname
        }
      });
      
      if (numClients === 0) {
        socket.emit(SOCKET_EVENT_TYPE.IS_CALLER);
      } else {
        socket.emit(SOCKET_EVENT_TYPE.IS_CALLEE);
        socket.broadcast.emit(SOCKET_EVENT_TYPE.CALLEE_JOINS);
      }
    });
    
    socket.on('disconnect', function() {
    
    });
  });
}

module.exports = socket;
