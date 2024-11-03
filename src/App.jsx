import './App.css'
import FormCreateProduct from './components/FormCreateProduct.jsx'
import { useMutation, useQuery } from '@tanstack/react-query'
import { queryClient } from './lib/queryClient'
function App() {

  async function getProduct() {
    const res = await fetch("https://6726e67c302d03037e6ea211.mockapi.io/api/product")
    const data = await res.json()
    return data
  }

  async function deleteProduct(id) {
    await fetch(`https://6726e67c302d03037e6ea211.mockapi.io/api/product/${id}`, {
      method: "DELETE"
    })

  }

  const { data } = useQuery({
    queryKey: ["PRODUCT"],
    queryFn: () => getProduct()
  })

  const { mutate } = useMutation({
    mutationFn: (id) => deleteProduct(id),
    mutationKey: ["DELETE_PRODUCT"],
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["PRODUCT"] })
  })



  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 10
    }}>
      <FormCreateProduct />


      <div style={{ display: "flex", flexDirection: 'column', gap: 4 }}>
        {data?.map((item, key) => {
          return <div key={key} style={{ display: "flex", flexDirection: 'row', gap: 4 }}>
            <p>{item.name}</p>
            <p>{item.id}</p>
            <button type='button' onClick={() => mutate(item.id)} style={{
              background: "red",
              color: "white",
              border: "none",
              borderRadius: "5px",
              padding: "5px",
              cursor: "pointer"
            }}>Delete</button>
          </div>
        })}
      </div>

    </div>
  )
}

export default App
