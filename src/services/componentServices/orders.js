let url = 'http://localhost:4000/orders/'

const getOrders = async () => {
  let response = await fetch(url);
  let responseData = await response.json();
  return responseData;
};

const getOrder = async (id) => {
  let response = await fetch(url);
  let responseData = await response.json();
  return responseData;
};

const createOrder = async (target) => {
  const conveyor = {
    name: target[1].value,
    user: target[2].value,
    neighborhood: target[3].value,
    route: target[4].value,
  }

   fetch(url, {
      // Adding method type
      method: "POST",
      // Adding body or contents to send
      body: JSON.stringify(conveyor),
      // Adding headers to the request
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      }
  })
  .catch(error => console.error('Error:', error))
  .then(response => response.json())
}

const deleteOrder = async (item) => {
  if (window.confirm('¿Esta seguro que desea eliminar este producto?')) {
    fetch(url + item._id, {
      method: 'DELETE',
      body: JSON.stringify(item),
      headers: {
         "Content-type": "application/json; charset=UTF-8"
      }
   })
   .catch(error => console.error('Error:', error))
   .then(res => res.text()) // or res.json()
   .then(res => console.log("Conveyor deleted..", res))
  } else {
    this.onCancel(item)
  }
}

const updateOrder = (target) => {
  const conveyor = {
    _id: target[0].value,
    name: target[1].value,
    user: target[2].value,
    neighborhood: target[3].value,
    route: target[4].value,
  }

  fetch(url+conveyor._id, {
     method: "PUT",
     body: JSON.stringify(conveyor),
     headers: {
       "Content-type": "application/json; charset=UTF-8"
     }
   })
 .catch(error => console.error('Error:', error))
 .then(response => response.json())
}

export {
  getOrders,
  getOrder,
  createOrder,
  deleteOrder,
  updateOrder
}
