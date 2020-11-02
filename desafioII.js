const userModule = (() => {

  async function init() {
    const { results: users} = await getUsers()
    console.log(users)
    render(users)
  }
  async function getUsers() {
    try{
      const response = await fetch('https://randomuser.me/api/?results=10')
      const resp = await response.json()
      console.log(resp)
      return resp
    }catch(error){
      return error
    }
  }

  function render(users) {
    const user_data = document.querySelector('#user-data')
    const html = users.map(user => 
    ` <img src="${user.picture.large}">
      <p><strong>Nombre:</strong> ${user.name.first} ${user.name.last}</p>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Teléfono:</strong> ${user.phone}</p>
     `)

    const user_data_ul = document.createElement('ul')
    user_data_ul.innerHTML = html.join(' ')
    user_data.appendChild(user_data_ul)

    console.log(html)
  }
  return {init}
})()
userModule.init()