import { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import { queryClient } from "../lib/queryClient"
const FormCreateProduct = () => {
    const [name, setName] = useState("")

    async function createProduct(name) {
        await fetch("https://6726e67c302d03037e6ea211.mockapi.io/api/product", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name
            })
        })
    }


    const { mutate } = useMutation({
        mutationFn: (name) => createProduct(name),
        mutationKey: ["ADD_PRODUCT"],
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["PRODUCT"] })
    })




    const onSubmit = (event) => {
        event.preventDefault()
        mutate(name)
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
            </div>
        </form>
    )
}

export default FormCreateProduct