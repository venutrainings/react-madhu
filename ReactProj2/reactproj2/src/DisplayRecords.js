import './DisplayRecords.css'


const DisplayRecords = props =>{
    const {data} = props
    const {id,name,email,gender,status} = data
    

    return (
        <>
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{gender}</td>
            <td>{status}</td>
        </tr>
        </>
    )
}
export default DisplayRecords;