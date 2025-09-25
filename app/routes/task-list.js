module.exports = {
  method: 'GET',
  path: '/task-list',
  handler: (request, h) => {
    return h.view('task-list.html')
  }
}
