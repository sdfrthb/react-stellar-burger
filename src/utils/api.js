const baseUrl = 'https://norma.nomoreparties.space/api';

function checkResponse(res) {
  if (res.ok) {
    console.log(res)
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

async function request(endPoints, options)  {
  const res = await fetch(`${baseUrl}/${endPoints}`, options);
  return checkResponse(res);
};

export async function getData()  {
  return request('ingredients').then((res) => res.data);
};

export async function postOrder(ingredients) {
   return request('orders', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(ingredients),
  })}












