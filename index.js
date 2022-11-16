const token = 'Bearer e5baa77b619df6c6b1022d5d20738c36'
const path = 'https://filecoin.bubbleapps.io/version-test/api/1.1/wf'
const headers = {
  'Content-Type': 'application/json',
  Authorization: `${token}`,
}

const onSelectFile = () => sendFile(input.files[0])

var input = document.getElementById('fileinput')
input.addEventListener('change', onSelectFile, false)

const sendFileInput = {
  user_id: '1668558296414x797959664741238500',
  filename: 'myFile',
  file: input.files[0],
}

const signUpInput = {
  email: 'angel_alcudia1@hotmail.com',
}

const verifyCodeInput = {
  email: 'angel_alcudia1@hotmail.com',
  code: '256020',
}

const listCidsInput = {
  user_id: '1668558296414x797959664741238500',
}

const signUp = (body) => {
  fetch(`${path}/signup`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((json) => console.log(json))
}

const verifyCode = (body) => {
  fetch(`${path}/verify_code`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((json) => console.log(json))
}

const listCids = (body) => {
  fetch(`${path}/list_cids`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((json) => console.log(json))
}

const sendFile = (file) => {
  fetch(`${path}/upload_file`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      user_id: '1668558296414x797959664741238500',
      filename: 'myFile',
      file: file,
    }),
  })
    .then((res) => res.json())
    .then((json) => console.log(json))
}
