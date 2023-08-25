import React from "react";
import { useForm } from "react-hook-form";

export const AddTasks = React.memo(({ addTest }) => {
    const { handleSubmit, reset, register } = useForm()
    const add = (data) => {
        addTest(data)
        reset()
    }
    return (
        <div style={{ width: "1000px", height: "300px", display: "flex", alignItems: "start", justifyContent: "center" }}>
            <form onSubmit={handleSubmit(add)} className='form1'>
                <input placeholder='Lorem Ipsum' className='inp11'{...register("name")} />
                <br />
                <button style={{ color: "red", display: "flex", alignItems: "center",justifyContent:'center', }} className='btn11'>ADD</button>
            </form>
        </div>
    )
})