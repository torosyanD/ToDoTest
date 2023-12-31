import React from "react";
import '../App.css'

export const ShowTasks = React.memo(({ tasks, deleteById }) => {
    console.log(tasks);
    return (
        <div className="dv1">
            
            <div className="ddd1" style={{ width: "1000px", height: "300px", display: "flex", alignItems: "end", justifyContent: "center" }}>
               
                <table>
                    <thead>
                        <tr>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            tasks.map((e) => {
                                return (
                                    <tr key={e.id} className="btn11">
                                        <td>
                                            <input  type="checkbox" />
                                        </td>

                                        <td>{e.name}</td>
                                        <td style={{ display: 'flex', }}>
                                            <button onClick={() => deleteById(e.id)} style={{ border: "3px solid rgb(238,238,238)", marginLeft: "110px", marginTop: "-1px" }}>X</button>
                                        </td>

                                    </tr>

                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
})